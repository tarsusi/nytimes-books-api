<template>
  <div class="best-sellers-books-container">
    <span class="best-sellers-books-title">
      {{
      categoryDisplayName
      ? $t('best_sellers_books_main_title_with_category', { category: categoryDisplayName })
      : $t('best_sellers_books_main_title')
      }}
    </span>
    <div class="best-sellers-books-date-picker-container">
      <div
        class="date-picker-information"
      >{{ $t('best_sellers_books_date_picker_information_label') }}</div>
      <a-date-picker
        allowClear
        @change="onDateChange"
        v-bind:placeholder="this.$t('best_sellers_books_date_picker_placeholder')"
      />
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
            {{ $t('go_book_details_button_label') }}
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
import i18n from '@/common/i18n';

const columns = [
  {
    title: i18n.t('best_sellers_books_table_column_rank_title'),
    dataIndex: 'rank',
    width: '5%',
  },
  {
    title: i18n.t('best_sellers_books_table_column_title_title'),
    dataIndex: 'title',
  },
  {
    title: i18n.t('best_sellers_books_table_column_isbn_title'),
    dataIndex: 'primary_isbn13',
    width: '20%',
  },
  {
    title: i18n.t('best_sellers_books_table_column_rank_last_week_title'),
    dataIndex: 'rank_last_week',
    width: '10%',
  },
  {
    title: i18n.t('best_sellers_books_table_column_weeks_on_list_title'),
    dataIndex: 'weeks_on_list',
    width: '10%',
  },
  {
    title: i18n.t('best_sellers_books_table_column_actions_title'),
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
