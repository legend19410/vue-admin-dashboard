<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Positions",
                list: ['Utilities', 'Positions']
            },
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-6">
            <SimpleCardComponent title="Positions" cardClassBody="bd-example-position-utils">
                <div class="position-relative">
                    <div class="position-absolute top-0 start-0"></div>
                    <div class="position-absolute top-0 end-0"></div>
                    <div class="position-absolute top-50 start-50"></div>
                    <div class="position-absolute bottom-50 end-50"></div>
                    <div class="position-absolute bottom-0 start-0"></div>
                    <div class="position-absolute bottom-0 end-0"></div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-6">
            <SimpleCardComponent title="Centering Elements With Positions" cardClassBody="bd-example-position-utils">
                <div class="position-relative">
                    <div class="position-absolute top-0 start-0 translate-middle"></div>
                    <div class="position-absolute top-0 start-50 translate-middle"></div>
                    <div class="position-absolute top-0 start-100 translate-middle"></div>
                    <div class="position-absolute top-50 start-0 translate-middle"></div>
                    <div class="position-absolute top-50 start-50 translate-middle"></div>
                    <div class="position-absolute top-50 start-100 translate-middle"></div>
                    <div class="position-absolute top-100 start-0 translate-middle"></div>
                    <div class="position-absolute top-100 start-50 translate-middle"></div>
                    <div class="position-absolute top-100 start-100 translate-middle"></div>
                </div>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-6">
            <SimpleCardComponent title="By adding .translate-middle-x or .translate-middle-y classes"
                cardClassBody="bd-example-position-utils">
                <div class="position-relative">
                    <div class="position-absolute top-0 start-0"></div>
                    <div class="position-absolute top-0 start-50 translate-middle-x"></div>
                    <div class="position-absolute top-0 end-0"></div>
                    <div class="position-absolute top-50 start-0 translate-middle-y"></div>
                    <div class="position-absolute top-50 start-50 translate-middle"></div>
                    <div class="position-absolute top-50 end-0 translate-middle-y"></div>
                    <div class="position-absolute bottom-0 start-0"></div>
                    <div class="position-absolute bottom-0 start-50 translate-middle-x"></div>
                    <div class="position-absolute bottom-0 end-0"></div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="Examples:"
                        cardClassBody="bd-example-position-examples d-flex justify-content-around flex-wrap gap-3">
                        <button type="button" class="btn btn-primary position-relative">
                            Mails <span
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99
                                <span class="visually-hidden">unread messages</span></span>
                        </button>

                        <button type="button" class="btn btn-dark position-relative about text-white">
                            Marker <svg width="1em" height="1em" viewBox="0 0 16 16"
                                class="position-absolute top-100 start-50 translate-middle mt-1 svg-white"
                                fill="#212529" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z">
                                </path>
                            </svg>
                        </button>

                        <button type="button" class="btn btn-primary position-relative">
                            Alerts <span
                                class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span
                                    class="visually-hidden">unread messages</span></span>
                        </button>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="Example With Buttons:" cardClassBody="bd-example-position-examples">
                        <div class="position-relative m-4">
                            <div class="progress" style="height: 1px;">
                                <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50"
                                    aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            <button type="button"
                                class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
                                style="width: 2rem; height:2rem;">1</button>
                            <button type="button"
                                class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
                                style="width: 2rem; height:2rem;">2</button>
                            <button type="button"
                                class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
                                style="width: 2rem; height:2rem;">3</button>
                        </div>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->

</template>

<style scoped></style>
