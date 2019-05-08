<template>
  <div class="book-categories-container">
    <span class="book-categories-title">Book Categories</span>
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
        <template slot="goBestSellerBooks" slot-scope="text">
          <a-button
            @click="goToBestSellerBooks(text)"
            type="primary"
            size="small"
          >Go Best Seller Books ></a-button>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getBookCategories } from '@/services/bookApi';

const columns = [
  {
    title: 'Name',
    dataIndex: 'display_name',
  },
  {
    title: 'Oldest Published Data',
    dataIndex: 'oldest_published_date',
    width: '20%',
  },
  {
    title: 'Newest Published Data',
    dataIndex: 'newest_published_date',
    width: '20%',
  },
  {
    title: 'Updated',
    dataIndex: 'updated',
    width: '20%',
  },
  {
    title: 'Actions',
    dataIndex: 'list_name_encoded',
    width: '20%',
    scopedSlots: { customRender: 'goBestSellerBooks' },
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
    goToBestSellerBooks(type) {
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
