<script lang="ts">
import { ref } from "vue";
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";

export default {
    setup() {
        const picked = ref(new Date());
        const picked1 = ref(new Date());
        return { picked, picked1 };
    },
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Create Project",
                list: ['Apps', 'Projects', 'Create Project']
            },
            tagValue: [
                { name: 'Research', code: 're' },
                { name: 'Design', code: 'des' },
                { name: 'Development', code: 'dev' },
                { name: 'Marketing', code: 'mark' },
            ],
            tagOptions: [
                { name: 'Research', code: 're' },
                { name: 'Design', code: 'des' },
                { name: 'Development', code: 'dev' },
                { name: 'Marketing', code: 'mark' },
                { name: 'Sales', code: 'sales' }
            ],
            AssignedSelecteOption: [
                { name: 'Angelina May' },
                { name: 'Kiara advain' },
                { name: 'Hercules Jhon' },
            ],
            prioritySelecteValue: ['High'],
            prioritySelecteOptions: ['Low', 'Medium', 'High'],
            statusSelecteValue: ['Inprogress'],
            statusSelecteOptions: ['Inprogress', 'On-hold', 'Completed'],
            AssignedSelecteValue: null,
            AssignedSelecteOptions: [
                { name: 'Angelina May', code: 'an' },
                { name: 'Kiara advain', code: 'ki' },
                { name: 'Hercules Jhon', code: 'he' },
                { name: 'Mayor Kim', code: 'ma' },
                { name: 'Alexa Biss', code: 'al' },
                { name: 'Karley Dia', code: 'ka' },
                { name: 'Kim Jong', code: 'ki' },
                { name: 'Darren Sami', code: 'da' },
                { name: 'Elizabeth', code: 'el' },
                { name: 'Bear Gills', code: 'be' },
                { name: 'Alex Carey', code: 'al' }
            ],
            content: '<p>lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33.</p> <p><br></p>  <ol> <li class="ql-size-normal">Conducting a comprehensive analysis of the existing website design.</li> <li class="">Collaborating with the UI/UX team to develop wireframes and mockups.</li> <li class="">Iteratively refining the design based on feedback..</li> <li class="">Implementing the finalized design changes using HTML, CSS, and JavaScript. </li> <li class="">Testing the website across different devices and browsers.</li> </ol>'
        };
    },
    methods: {

        addTag(newTag: string) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.tagOptions.push(tag)
            this.tagValue.push(tag)
        },
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Create Project
                    </div>
                </div>
                <div class="card-body">
                    <div class="row gy-3">
                        <div class="col-xl-4">
                            <label for="input-label" class="form-label">Project Name :</label>
                            <input type="text" class="form-control" id="input-label" placeholder="Enter Project Name">
                        </div>
                        <div class="col-xl-4">
                            <label for="input-label11" class="form-label">Project Manager :</label>
                            <input type="text" class="form-control" id="input-label11"
                                placeholder="Project Manager Name">
                        </div>
                        <div class="col-xl-4">
                            <label for="input-label1" class="form-label">Client / Stakeholder :</label>
                            <input type="text" class="form-control" id="input-label1" placeholder="Enter Client Name">
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">Project Description :</label>
                            <vue-editor id="project-descriptioin-editor" v-model="content"></vue-editor>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Start Date :</label>
                            <div class="form-group">
                                <div class="input-group">
                                    <Datepicker1 placeholder="Date Time" class="datepicker-here" autoApply
                                        v-model="picked" time-picker-inline>
                                        <template #input-icon>
                                            <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i>
                                            </div>
                                        </template>
                                    </Datepicker1>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">End Date :</label>
                            <div class="form-group">
                                <div class="input-group">
                                    <Datepicker1 placeholder="Date Time" class="datepicker-here" autoApply
                                        v-model="picked1" time-picker-inline>
                                        <template #input-icon>
                                            <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i>
                                            </div>
                                        </template>
                                    </Datepicker1>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Status :</label>
                            <multiselect1 :show-labels="false" name="status" id="status" v-model="statusSelecteValue"
                                :multiple="false" :options="statusSelecteOptions">
                            </multiselect1>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Priority :</label>
                            <multiselect1 :show-labels="false" name="priority" id="priority"
                                v-model="prioritySelecteValue" :multiple="false" :options="prioritySelecteOptions">
                            </multiselect1>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Assigned To</label>
                            <multiselect1 :show-labels="false" v-model="AssignedSelecteOption"
                                tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name"
                                track-by="code" :options="AssignedSelecteOptions" :multiple="true" :taggable="true"
                                @tag="addTag">
                            </multiselect1>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Tags</label>
                            <multiselect1 :show-labels="false" v-model="tagValue" tag-placeholder="Add this as new tag"
                                placeholder="Search or add a tag" label="name" track-by="code" :options="tagOptions"
                                :multiple="true" :taggable="true" @tag="addTag">
                            </multiselect1>
                        </div>
                        <div class="col-xl-12 ">
                            <label class="form-label">Attachments</label>
                            <DropZone class="multiple-filepond overflow-hidden" :maxFiles="6" :uploadOnDrop="true"
                                :multipleUpload="true" :parallelUpload="3" />
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary-light btn-wave ms-auto float-end">Create Project</button>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
