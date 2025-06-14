<template>
  <PageHeader :propData="dataToPass" />
  <div class="row">
    <div class="col-xl-12">
      <SimpleCardComponent title="Basic Datatable">
        <EasyDataTable class="table text-nowrap" :headers="headers" :items="items" border-cell :rowsPerPage="5"
          :rowsItems="[5, 10, 25, 50, 100]" />
      </SimpleCardComponent>
    </div>
  </div>
  <div class="row">
    <div class="col-xl-12">
      <SimpleCardComponent title="Expandable row">
        <EasyDataTable class="table text-nowrap" :headers="headers" :items="items" :rowsPerPage="5"
          :rowsItems="[5, 10, 25, 50, 100]">
          <template #expand="item">
            <div style="padding: 15px">Additional Details of {{ item.name }}</div>
          </template>
        </EasyDataTable>
      </SimpleCardComponent>
    </div>
  </div>
  <div class="row row-sm">
    <div class="col-lg-12">
      <SimpleCardComponent :showCardHeader="false" cardClassBody="custom-table-select">
        <div>
          <h6 class="main-content-label mb-1">Sample max-height DataTable</h6>
          <p class="text-muted card-sub-title">DataTable using vue-good-table-next</p>
        </div>
        <Sample4datable />
      </SimpleCardComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import Sample4datable from "./sample4datable.vue";
import { Header, Item } from 'vue3-easy-data-table';
import SimpleCardComponent from "../../../shared/UI/simple-cards.vue"

export default defineComponent({
  components: {
    PageHeader,
    Sample4datable,
    SimpleCardComponent
  },
  props: {
    dataToPass: {
      type: Object,
      default: () => ({
        current: "Data Tables",
        list: ['Tables', 'Data Tables']
      })
    }
  },
  setup() {
    const headers: Header[] = [
      { text: "Name", value: "name" },
      { text: "Position", value: "position" },
      { text: "Office", value: "office" },
      { text: "Age", value: "age", sortable: true },
      { text: "Start date", value: "startdate", sortable: true },
      { text: "Salary", value: "salary", sortable: true }
    ];

    const items: Item[] = [
      { name: "Tiger Nixon", position: "System Architect", office: "Edinburgh", age: "61", startdate: "2011-04-25", salary: "$320,800" },
      { name: "Garrett Winters", position: "Accountant", office: "Tokyo", age: "63", startdate: "2011-07-25", salary: "$170,750" },
      { name: "Ashton Cox", position: "Junior Technical Author", office: "San Francisco", age: "66", startdate: "2009-01-12", salary: "$86,000" },
      { name: "Cedric Kelly", position: "Senior Javascript Developer", office: "Edinburgh", age: "22", startdate: "2012-03-29", salary: "$433,060" },
      { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: "33", startdate: "2008-11-28", salary: "$162,700" },
      { name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: "61", startdate: "2012-12-02", salary: "$372,000" },
      { name: "Herrod Chandler", position: "Sales Assistant", office: "San Francisco", age: "59", startdate: "2012-08-06", salary: "$137,500" },
      { name: "Rhona Davidson", position: "Integration Specialist", office: "Tokyo", age: "55", startdate: "2010-10-14", salary: "$327,900" },
      { name: "Airi Satou", position: "Accountant", office: "Tokyo", age: "33", startdate: "2008-11-28", salary: "$162,700" },
      { name: "Brielle Williamson", position: "Integration Specialist", office: "New York", age: "61", startdate: "2012-12-02", salary: "$372,000" },
      { name: "Herrod Chandler", position: "Sales Assistant", office: "San Francisco", age: "59", startdate: "2012-08-06", salary: "$137,500" },
      { name: "Rhona Davidson", position: "Integration Specialist", office: "Tokyo", age: "55", startdate: "2010-10-14", salary: "$327,900" },
      { name: "Colleen Hurst", position: "Javascript Developer", office: "San Francisco", age: "39", startdate: "2009-09-15", salary: "$205,500" },
      { name: "Sonya Frost", position: "Software Engineer", office: "Edinburgh", age: "23", startdate: "2008-12-13", salary: "$103,600" },
      { name: "Jena Gaines", position: "Office Manager", office: "London", age: "30", startdate: "2008-12-19", salary: "$90,560" },
      { name: "Quinn Flynn", position: "Support Lead", office: "Edinburgh", age: "22", startdate: "2013-03-03", salary: "$342,000" },
      { name: "Charde Marshall", position: "Regional Director", office: "San Francisco", age: "36", startdate: "2008-10-16", salary: "$470,600" },
      { name: "Haley Kennedy", position: "Senior Marketing Designer", office: "London", age: "43", startdate: "2012-12-18", salary: "$313,500" },
      { name: "Tatyana Fitzpatrick", position: "Regional Director", office: "London", age: "19", startdate: "2010-03-17", salary: "$385,750" },
      { name: "Michael Silva", position: "Marketing Designer", office: "London", age: "66", startdate: "2012-11-27", salary: "$198,500" },
      { name: "Paul Byrd", position: "Chief Financial Officer (CFO)", office: "New York", age: "64", startdate: "2010-06-09", salary: "$725,000" },
      { name: "Gloria Little", position: "Systems Administrator", office: "New York", age: "59", startdate: "2009-04-10", salary: "$237,500" },
      { name: "Bradley Greer", position: "Software Engineer", office: "London", age: "41", startdate: "2012-10-13", salary: "$132,000" },
      { name: "Dai Rios", position: "Personnel Lead", office: "Edinburgh", age: "35", startdate: "2012-09-26", salary: "$217,500" },
      { name: "Jenette Caldwell", position: "Development Lead", office: "New York", age: "30", startdate: "2011-09-03", salary: "$345,000" },
      { name: "Yuri Berry", position: "Chief Marketing Officer (CMO)", office: "New York", age: "40", startdate: "2009-06-25", salary: "$675,000" },
      { name: "Caesar Vance", position: "Pre-Sales Support", office: "New York", age: "21", startdate: "2011-12-12", salary: "$106,450" },
      { name: "Doris Wilder", position: "Sales Assistant", office: "Sydney", age: "23", startdate: "2010-09-20", salary: "$85,600" },
      { name: "Angelica Ramos", position: "Chief Executive Officer (CEO)", office: "London", age: "47", startdate: "2009-10-09", salary: "$1,200,000" },
      { name: "Gavin Joyce", position: "Developer", office: "Edinburgh", age: "42", startdate: "2010-12-22", salary: "$92,575" },
      { name: "Jennifer Chang", position: "Regional Director", office: "Singapore", age: "28", startdate: "2010-11-14", salary: "$357,650" },
      { name: "Brenden Wagner", position: "Software Engineer", office: "San Francisco", age: "28", startdate: "2011-06-07", salary: "$206,850" },
    ];

    return {
      headers,
      items
    };
  },
});
</script>

<style scoped></style>
