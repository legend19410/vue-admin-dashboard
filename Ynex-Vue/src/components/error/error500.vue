<script lang="ts">

export default {}
</script>

<template>
    <div class="page error-bg" id="particles-js">
        <!-- Start::error-page -->
        <div class="error-page">
            <div class="container">
                <div class="text-center p-5 my-auto">
                    <div class="row align-items-center justify-content-center h-100">
                        <div class="col-xl-7">
                            <p class="error-text mb-sm-0 mb-2">500</p>
                            <p class="fs-18 fw-semibold mb-3">Oops &#128557;,The page you are looking for is not
                                available.</p>
                            <div class="row justify-content-center mb-5">
                                <div class="col-xl-6">
                                    <p class="mb-0 op-7">We are sorry for the inconvenience,The page you are trying to
                                        access has been removed or never been existed.</p>
                                </div>
                            </div>
                            <router-link to='/dashboard/crm' class="btn btn-primary"><i
                                    class="ri-arrow-left-line align-middle me-1 d-inline-block"></i>BACK TO
                                HOME</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
