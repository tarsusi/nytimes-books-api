<template>
  <div class="book-details-container" v-if="bookDetails">
    <div class="go-back-container">
      <a-button type="primary" @click="goBestSellersList">
        <a-icon type="left"/>
        <span class="go-back-title">Go Best Sellers List</span>
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
        <div class="book-info">
          <div class="info-title">Title</div>
          <div class="info-value">{{bookDetails.title}}</div>
        </div>
        <div class="book-info">
          <div class="info-title">Author</div>
          <div class="info-value">{{bookDetails.author}}</div>
        </div>
        <div class="book-info">
          <div class="info-title">Description</div>
          <div class="info-value">{{bookDetails.description}}</div>
        </div>
        <div class="book-info">
          <div class="info-title">Publisher</div>
          <div class="info-value">{{bookDetails.publisher}}</div>
        </div>
        <div class="book-info">
          <div class="info-title">Contributor</div>
          <div class="info-value">{{bookDetails.contributor}}</div>
        </div>
        <div class="book-info">
          <div class="info-title">Contributor Note</div>
          <div class="info-value">{{bookDetails.contributor_note}}</div>
        </div>
        <div class="book-info">
          <div class="info-title">ISBN 10</div>
          <div class="info-value">{{bookDetails.primary_isbn10}}</div>
        </div>
        <div class="book-info">
          <div class="info-title">ISBN 13</div>
          <div class="info-value">{{bookDetails.primary_isbn13}}</div>
        </div>
        <div class="book-buy-links">
          <div class="book-buy-link-title">You can buy the books from:</div>
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

export default {
  data() {
    return {
      bookDetails: this.book,
    };
  },
  methods: {
    goBestSellersList() {
      this.$router.push({ path: `/category/${this.$attrs.name}` });
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
        }
      });
    }
  },
  props: ['book'],
  name: 'book-details',
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

      .book-info {
        display: flex;
        justify-content: space-between;

        padding: 0 8px 8px;

        &:not(:first-child) {
          padding-top: 8px;
        }

        border-bottom: 1px solid #e10963;

        &:nth-child(2n) {
          background-color: rgba(#b5b5b5, 0.4);
        }

        .info-title {
          font-size: 18px;
          font-weight: bold;
        }

        .info-value {
          padding-left: 8px;
          text-align: right;
        }
      }

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
