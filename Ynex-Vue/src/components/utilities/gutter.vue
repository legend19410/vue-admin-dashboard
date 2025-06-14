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
                current: "Gutters",
                list: ['Utilities', 'Gutters']
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
            <SimpleCardComponent title="Horizontal gutters">
                <p><span class="text-danger">.gx-*</span> classes can be used to control the
                    horizontal gutter widths. The <span class="text-danger">.container</span>
                    or <span class="text-danger">.container-fluid</span>> parent may need to be
                    adjusted if larger gutters are used
                    too to avoid unwanted overflow, using a matching padding utility. For
                    example,
                    in the following example we’ve increased the padding with <span class="text-danger">.px-4</span>:
                </p>
                <div class="container px-4 mb-3">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3 border bg-light mb-1">Custom column padding</div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light">Custom column padding</div>
                        </div>
                    </div>
                </div>
                <p>An alternative solution is to add a wrapper around the <span class="text-danger">.row</span> with the
                    <span class="text-danger">.overflow-hidden</span> class:
                </p>
                <div class="container overflow-hidden">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3 border bg-light mb-1">Custom column padding</div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light">Custom column padding</div>
                        </div>
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-6">
            <SimpleCardComponent title="Vertical gutters">
                <p><span class="text-danger">.gy-*</span> classes can be used to control the
                    vertical gutter widths. Like the
                    horizontal gutters, the vertical gutters can cause some overflow below the
                    .row
                    at the end of a page. If this occurs, you add a wrapper around <span class="text-danger">.row</span>
                    with the
                    <span class="text-danger">.overflow-hidden</span> class:
                </p>
                <div class="container overflow-hidden">
                    <div class="row gy-5">
                        <div class="col-6">
                            <div class="p-3 border bg-light">Custom column padding</div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 border bg-light">Custom column padding</div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 border bg-light">Custom column padding</div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 border bg-light">Custom column padding</div>
                        </div>
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2  -->
    <div class="row">
        <div class="col-xl-6">
            <SimpleCardComponent title="Horizontal & vertical gutters">
                <p><span class="text-danger">.g-*</span> classes can be used to control the
                    horizontal gutter widths, for the
                    following example we use a smaller gutter width, so there won’t be a need to
                    add
                    the <span class="text-danger">.overflow-hidden</span> wrapper class.</p>
                <div class="container">
                    <div class="row g-2">
                        <div class="col-6">
                            <div class="p-3 border bg-light">Custom column padding</div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 border bg-light">Custom column padding</div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 border bg-light">Custom column padding</div>
                        </div>
                        <div class="col-6">
                            <div class="p-3 border bg-light">Custom column padding</div>
                        </div>
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-6">
            <SimpleCardComponent title="Row columns gutters">
                <p>Gutter classes can also be added to <span class="text-danger">row
                        columns</span>.
                    In the following example, we use
                    responsive row columns and responsive gutter classes.
                </p>
                <div class="container">
                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div class="col">
                            <div class="p-3 border bg-light">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light">Row column</div>
                        </div>
                        <div class="col">
                            <div class="p-3 border bg-light">Row column</div>
                        </div>
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-6">
            <SimpleCardComponent title="No gutters">
                <p>The gutters between columns in our predefined grid classes can be removed
                    with
                    <span class="text-danger">.g-0</span>. This removes the negative <span
                        class="text-danger">margins</span> from <span class="text-danger">.row
                    </span>and the horizontal <span class="text-danger">padding</span>
                    from all immediate children columns.
                </p>
                <p>Need an edge-to-edge design? Drop the parent <span class="text-danger">.container</span> or <span
                        class="text-danger">.container-fluid</span> and
                    add <span class="text-danger">.mx-0</span> to the <span class="text-danger">.row</span> to prevent
                    overflow.
                </p>
                <p>In practice, here’s how it looks. Note you can continue to use this with all
                    other predefined grid classes (including column widths, responsive tiers,
                    reorders, and more).</p>
                <div class="row g-0">
                    <div class="col-sm-6 col-md-8 bd-example-grid">.col-sm-6 .col-md-8</div>
                    <div class="col-6 col-md-4 bd-example-grid">.col-6 .col-md-4</div>
                </div>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-2  -->
</template>

<style scoped></style>
