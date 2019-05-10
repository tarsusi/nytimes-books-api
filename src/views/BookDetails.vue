<template>
  <div class="book-details-container" v-if="bookDetails">
    <div class="go-back-container">
      <a-button type="primary" @click="goBestSellersList">
        <a-icon type="left"/>
        <span class="go-back-title">{{ $t('go_best_sellers_books_button_label') }}</span>
      </a-button>
    </div>
    <span class="book-details-title">{{ bookDetails.title }}</span>
    <div class="book-details-content">
      <img
        v-bind:src="bookDetails.book_image"
        v-bind:width="bookDetails.book_image_width"
        v-bind:height="bookDetails.book_image_height"
      >
      <div class="book-information">
        <book-info
          v-for="bookInfo in bookInfos"
          :key="bookInfo.name"
          :title="bookInfo.name"
          :value="bookInfo.value"
        ></book-info>

        <div class="book-buy-links">
          <div class="book-buy-link-title">{{ $t('book_info_buy_links_title') }}</div>
          <li class="book-buy-link" v-for="link in bookDetails.buy_links" v-bind:key="link.name">
            <a v-bind:href="link.url" target="_blank" rel="noopener">{{link.name}}</a>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBookDetails } from '@/services/bookApi';
import BookInfo from '@/components/BookInfo.vue';
import i18n from '@/common/i18n';

export default {
  data() {
    return {
      bookDetails: this.book,
      bookInfos: (this.book && this.generateBookInformation(this.book)) || [],
    };
  },
  methods: {
    goBestSellersList() {
      this.$router.push({ path: `/category/${this.$attrs.name}` });
    },
    generateBookInformation(book) {
      if (book) {
        return [
          { name: i18n.t('book_info_title_label'), value: book.title },
          { name: i18n.t('book_info_author_label'), value: book.author },
          {
            name: i18n.t('book_info_publisher_label'),
            value: book.publisher,
          },
          {
            name: i18n.t('book_info_description_label'),
            value: book.description,
          },
          {
            name: i18n.t('book_info_contributor_label'),
            value: book.contributor,
          },
          {
            name: i18n.t('book_info_contributor_note_label'),
            value: book.contributor_note,
          },
          {
            name: i18n.t('book_info_isbn10_label'),
            value: book.primary_isbn10,
          },
          {
            name: i18n.t('book_info_isbn13_label'),
            value: book.primary_isbn13,
          },
        ];
      }

      return [];
    },
  },
  mounted() {
    if (!this.bookDetails) {
      const { name: category, isbn } = this.$route.params;

      getBookDetails(category, isbn).then((bookDetails) => {
        if (!bookDetails) {
          this.$router.push('/');
        } else {
          this.bookDetails = bookDetails;
          this.bookInfos = this.generateBookInformation(bookDetails);
        }
      });
    }
  },
  props: ['book'],
  name: 'book-details',
  components: {
    BookInfo,
  },
};
</script>

<style lang="scss" scoped>
.book-details-container {
  text-align: left;

  padding: 24px;

  .go-back-container {
    margin-bottom: 24px;
  }

  .book-details-title {
    display: inline-block;

    font-size: 24px;

    margin-bottom: 16px;

    border-bottom: 1px solid #e10963;
  }

  .book-details-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin-top: 32px;

    .book-information {
      display: flex;
      flex-direction: column;

      flex: 1 auto;

      max-width: 750px;

      padding: 24px;

      .book-buy-links {
        padding: 32px 16px;

        .book-buy-link-title {
          font-size: 20px;
          font-weight: bold;

          padding-bottom: 8px;
        }

        .book-buy-link {
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
