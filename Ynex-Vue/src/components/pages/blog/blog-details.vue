<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import { recentPosts, topics, popularTags } from '../../../data/pages/blog-details';
import blogSuggestion from "../../../shared/components/@spk/pages/blog-suggestion.vue";

export default {
  components: {
    PageHeader,
    blogSuggestion
  },
  data() {
    return {
      dataToPass: {
        current: "Blog Details",
        list: ['Pages', 'Blog', 'Blog Details']
      },
      recentPosts, topics, popularTags
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />
  <div class="container-lg p-0">
    <!-- Start::row-1 -->
    <div class="row">
      <div class="col-xl-8">
        <div class="row">
          <div class="col-xl-12">
            <div class="card custom-card">
              <div class="card-body">
                <p class="fs-18 fw-semibold mb-1">Touring excites in winter when we travel with friends !</p>
                <div class="d-sm-flex align-items-cneter">
                  <div class="d-flex align-items-center flex-fill">
                    <span>
                      <img src="/images/faces/15.jpg" alt="" class="avatar avatar-sm avatar-rounded me-3">
                    </span>
                    <div>
                      <p class="mb-0 fw-semibold">Json Taylor - <span class="fs-11 text-muted fw-normal">Tue,25 Dec 2022
                          -
                          11:45</span></p>
                      <p class="mb-0 text-muted"></p>
                    </div>
                  </div>
                  <div class="mt-sm-0 mt-2">
                    <span class="badge bg-primary me-1">Nature</span>
                    <span class="badge bg-secondary">Travel</span>
                  </div>
                </div>
              </div>
              <a href="javascript:void(0);">
                <img src="/images/media/media-23.jpg" class="card-img rounded-0 blog-details-img" alt="...">
              </a>
              <div class="card-body border-bottom border-block-end-dashed">
                <div class="d-sm-flex d-block align-items-center justify-content-between">
                  <div class="d-flex align-items-cener">
                    <span class="badge bg-success-transparent me-3">
                      <i class="ri-thumb-up-line me-1 align-middle"></i> 32 Likes
                    </span>
                    <span class="badge bg-info-transparent me-3">
                      <i class="ri-chat-4-line me-1 align-middle"></i> 10 Comments
                    </span>
                  </div>
                  <div class="btn-list mt-sm-0 mt-2">
                    <button class="btn btn-icon btn-sm btn-primary-light">
                      <v-tooltip activator="parent" location="top">Like</v-tooltip><i
                        class="ri-thumb-up-line"></i></button>
                    <button class="btn btn-icon btn-sm btn-primary-light">
                      <v-tooltip activator="parent" location="top">Share</v-tooltip><i
                        class="ri-share-line"></i></button>
                    <button class="btn btn-sm btn-secondary-light"><i
                        class="ri-chat-4-line me-1 align-middle"></i>Comment</button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h6 class="fw-semibold">
                  Seeing with “fresh eyes” – A deeper nature experience
                </h6>
                <p class="mb-4 text-muted">
                  Around the time I first learned how to meditate, something amazing happened to me. It happened one
                  day,
                  quite spontaneously. I was working as a lawyer at the time and I used to walk down a little lane way
                  to
                  the train station on my commute to work. It’s not an especially beautiful lane way
                </p>
                <p class="mb-5 text-muted">
                  The world is animated by the wind. This invisible, mysterious force can bring a landscape alive. Its
                  absence can cast a calm stillness over the earth. On barren mountain tops its power is barely
                  perceptible;
                  in forests and seas its presence becomes manifest. Winds are wild, and sometimes destructive. When we
                  look
                  deeply into the surely gravity’s law, strong as an ocean current, takes hold of even the strongest
                  thing
                  and pulls it toward the heart of the world. Each thing- each stone, blossom, child – is held in place.
                  Only we, in our arrogance, push out beyond what we belong to for some empty freedom. If we surrendered
                </p>
                <div class="card custom-card bg-light mb-5 shadow-none">
                  <a href="javascript:void(0);" class="card-anchor"></a>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0 text-center">
                      <p class="fs-16 fw-semibold mb-2 text-dark">In nature, nothing is perfect and everything is
                        perfect.
                        Trees can be contorted, bent in weird ways, and they're still beautiful..</p>
                      <footer class="blockquote-footer mt-2 fs-14 op-7">Someone famous as <cite
                          title="Source Title">-Alice
                          Walker</cite></footer>
                    </blockquote>
                  </div>
                </div>
                <p class="mb-5 text-muted">
                  From enchanting nature's beauty quotes that evoke visions of lush meadows full of brilliantly-colored
                  flowers or dense forests with sky-high trees to famous quotes about nature's ever-present—and
                  absolutely
                  fundamental—role in our lives, these 101 quotes about nature will have you itching to get off your
                  couch
                  and get outside. For famous <b>quotes about nature</b>, we have them here!
                </p>
                <p class="text-center">
                  <button class="btn btn-primary">Load More</button>
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card custom-card">
              <div class="card-header">
                <div class="card-title">
                  Leave a Comment
                </div>
              </div>
              <div class="card-body">
                <div class="row gy-3">
                  <div class="col-xl-6">
                    <label for="blog-first-name" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="blog-first-name" placeholder="Enter Name">
                  </div>
                  <div class="col-xl-6">
                    <label for="blog-last-name" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="blog-last-name" placeholder="Enter Name">
                  </div>
                  <div class="col-xl-12">
                    <label for="blog-email" class="form-label">Email ID</label>
                    <input type="text" class="form-control" id="blog-email" placeholder="Enter Email">
                  </div>
                  <div class="col-xl-12">
                    <label for="blog-comment" class="form-label">Write Comment</label>
                    <textarea class="form-control" id="blog-comment" rows="5"></textarea>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="text-end">
                  <button class="btn btn-primary-light">Post Comment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="row">
          <div class="col-xl-12">
            <div class="card custom-card">
              <div class="card-body text-center p-4">
                <span class="avatar avatar-rounded avatar-xxl mb-3">
                  <img src="/images/faces/2.jpg" alt="img">
                </span>
                <p class="mb-1 fs-15 fw-semibold text-dark lh-1">Emiley Jackson</p>
                <p class="fs-12 text-muted mb-1"><span>emaileyjackson2134</span>@gmail.com</p>
                <p class="text-muted mb-0 p-3 pb-0">It is a long established fact that a reader will be distracted by
                  the
                  readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution </p>
              </div>
              <div class="card-footer border-block-start-dashed text-center">
                <div class="btn-list">
                  <div class="btn-list">
                    <button class="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
                      <i class="ri-facebook-line"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                      <i class="ri-twitter-x-line"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
                      <i class="ri-instagram-line"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light">
                      <i class="ri-github-line"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                      <i class="ri-youtube-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card custom-card">
              <div class="card-header">
                <div class="card-title">
                  Recent Posts
                </div>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="post in recentPosts" :key="post.id">
                    <blogSuggestion :post="post" :showIcon="true" />
                  </li>
                  <li class="list-group-item text-center">
                    <button class="btn btn-primary-light">Load more</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card custom-card">
              <div class="card-header">
                <div class="card-title">
                  Newsletter
                </div>
              </div>
              <div class="card-body">
                <div class="text-center">
                  <h6 class="fw-semibold mb-3"><span class="text-primary fs-18">1658</span> Subscribers</h6>
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Email Here" aria-label="blog-email"
                      aria-describedby="blog-subscribe">
                    <button class="btn btn-primary" type="button" id="blog-subscribe">Subscribe</button>
                  </div>
                  <label class="form-check-label">
                    By Subscribing you accept to <a href="javascript:void(0);" class="text-success"><u>privacy
                        policy</u></a>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card custom-card">
              <div class="card-header">
                <div class="card-title">
                  Explore Topics
                </div>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="topic in topics" :key="topic.id">
                    <a href="javascript:void(0);">
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                          <div>
                            <span class="avatar avatar-xs avatar-rounded" :class="'bg-' + topic.bgClass">
                              {{ topic.avatar }}
                            </span>
                          </div>
                          <div>
                            <span class="fw-semibold ms-2">{{ topic.name }}</span>
                          </div>
                        </div>
                        <div>
                          <span class="badge bg-light text-default rounded-pill">{{ topic.count }}</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card custom-card">
              <div class="card-header">
                <div class="card-title">
                  Popular Tags
                </div>
              </div>
              <div class="card-body">
                <div class="blog-popular-tags">
                  <a href="javascript:void(0);" v-for="tag in popularTags" :key="tag.id">
                    <span class="badge bg-light text-muted">#{{ tag.hashTag }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End::row-1 -->
  </div>
</template>

<style scoped></style>
