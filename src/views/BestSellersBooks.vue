<template>
  <div class="best-sellers-books-container">
    <span
      class="best-sellers-books-title"
    >Best Sellers Books {{ categoryDisplayName && `of ${categoryDisplayName}` }}</span>
    <div class="best-sellers-books-date-picker-container">
      <div class="date-picker-information">Select the date the best sellers list was published</div>
      <a-date-picker allowClear @change="onDateChange" placeholder="Published Date"/>
    </div>
    <div class="best-sellers-books">
      <a-table
        bordered
        size="small"
        :columns="columns"
        :dataSource="tableData"
        :loading="loading"
        :pagination="pagination"
        :rowKey="record => record.rank"
      >
        <template slot="goBookDetails" slot-scope="text, record">
          <a-button @click="goBookDetails(record)" type="primary" size="small">
            Details
            <a-icon type="right"></a-icon>
          </a-button>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getBestSellersBooks } from '@/services/bookApi';

const columns = [
  {
    title: 'Rank',
    dataIndex: 'rank',
    width: '5%',
  },
  {
    title: 'Book Title',
    dataIndex: 'title',
  },
  {
    title: 'ISBN',
    dataIndex: 'primary_isbn13',
    width: '20%',
  },
  {
    title: 'Rank Last Week',
    dataIndex: 'rank_last_week',
    width: '10%',
  },
  {
    title: 'Weeks on List',
    dataIndex: 'weeks_on_list',
    width: '10%',
  },
  {
    title: 'Actions',
    width: '10%',
    scopedSlots: { customRender: 'goBookDetails' },
  },
];

export default {
  data() {
    return {
      categoryDisplayName: '',
      pagination: {
        showSizeChanger: true,
        showQuickJumper: true,
      },
      tableData: [],
      loading: false,
      columns,
    };
  },
  mounted() {
    this.fetchBookCategories();
  },
  methods: {
    fetchBookCategories(publishedDate = 'current') {
      this.loading = true;
      const categoryName = this.$route.params.name;

      getBestSellersBooks(categoryName, publishedDate)
        .then((booksByDate) => {
          this.loading = false;

          if (booksByDate && booksByDate.books && booksByDate.books.length > 0) {
            this.categoryDisplayName = booksByDate.display_name;

            // eslint-disable-next-line arrow-parens
            this.tableData = booksByDate.books.map((book) => ({
              primary_isbn13: book.primary_isbn13,
              rank: book.rank,
              rank_last_week: book.rank_last_week,
              weeks_on_list: book.weeks_on_list,
              title: book.title,
              book_details: book,
            }));
          }
        })
        .catch(() => {
          this.loading = false;
        });
    },
    goBookDetails(book) {
      const { name } = this.$route.params;

      this.$router.push({
        name: 'book-details',
        params: {
          name,
          isbn: book.primary_isbn13,
          book: book.book_details,
        },
      });
    },
    onDateChange(date, publishedDate) {
      this.fetchBookCategories(publishedDate);
    },
  },
  name: 'categories',
};
</script>

<style lang="scss" scoped>
.best-sellers-books-container {
  text-align: left;

  padding: 24px;

  .best-sellers-books-title {
    display: inline-block;

    font-size: 24px;

    margin-bottom: 16px;

    border-bottom: 1px solid #e10963;
  }

  .best-sellers-books-date-picker-container {
    display: flex;
    align-items: center;

    margin: 16px 0 32px;

    .date-picker-information {
      padding-right: 16px;

      font-weight: bold;
    }
  }

  /deep/ .best-sellers-books {
    .ant-table-wrapper .ant-table-body {
      margin: 0px;

      .ant-table-row:nth-child(2n) {
        background-color: rgba(#b5b5b5, 0.5);
      }
    }
  }
}
</style>
