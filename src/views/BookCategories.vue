<template>
  <div class="book-categories-container">
    <span class="book-categories-title">{{ $t('book_categories_main_title') }}</span>
    <div class="book-categories">
      <a-table
        bordered
        size="small"
        :columns="columns"
        :dataSource="tableData"
        :loading="loading"
        :pagination="pagination"
        :rowKey="record => record.list_name_encoded"
      >
        <template slot="goBestSellersBooks" slot-scope="text">
          <a-button @click="goToBestSellersBooks(text)" type="primary" size="small">
            {{ $t('go_best_sellers_books_button_label') }}
            <a-icon type="right"></a-icon>
          </a-button>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getBookCategories } from '@/services/bookApi';
import i18n from '@/common/i18n';

const columns = [
  {
    title: i18n.t('book_categories_table_column_name_title'),
    dataIndex: 'display_name',
  },
  {
    title: i18n.t('book_categories_table_column_oldest_published_date_title'),
    dataIndex: 'oldest_published_date',
    width: '20%',
  },
  {
    title: i18n.t('book_categories_table_column_newest_published_date_title'),
    dataIndex: 'newest_published_date',
    width: '20%',
  },
  {
    title: i18n.t('book_categories_table_column_updated_title'),
    dataIndex: 'updated',
    width: '20%',
  },
  {
    title: i18n.t('book_categories_table_column_actions_title'),
    dataIndex: 'list_name_encoded',
    width: '20%',
    scopedSlots: { customRender: 'goBestSellersBooks' },
  },
];

export default {
  data() {
    return {
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
    fetchBookCategories() {
      this.loading = true;

      getBookCategories()
        .then((categories) => {
          this.loading = false;

          this.tableData = categories;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    goToBestSellersBooks(type) {
      this.$router.push({ path: `/category/${type}` });
    },
  },
  name: 'book-categories',
};
</script>

<style lang="scss" scoped>
.book-categories-container {
  text-align: left;

  padding: 24px;

  .book-categories-title {
    display: inline-block;

    font-size: 24px;

    margin-bottom: 16px;

    border-bottom: 1px solid #e10963;
  }

  /deep/ .book-categories {
    .ant-table-wrapper .ant-table-body {
      margin: 0px;

      .ant-table-row:nth-child(2n) {
        background-color: rgba(#b5b5b5, 0.5);
      }
    }
  }
}
</style>
