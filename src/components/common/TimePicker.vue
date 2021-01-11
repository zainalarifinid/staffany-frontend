<template>
  <v-menu
    v-model="timeMenu"
    :close-on-content-click="false"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        :label="label+'*'"
        readonly
        :value="input.time"
        v-on="on"
      ></v-text-field>
    </template>
    <v-tabs v-model="tab" >
      <v-tab>Date</v-tab>
      <v-tab>Time</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" >
      <v-tab-item>
        <v-date-picker
          locale="en-in"
          v-model="input.date"
          no-title
          @input="onPickDate"
        ></v-date-picker>
      </v-tab-item>
      <v-tab-item>
        <v-time-picker
          v-model="input.time"
          format="24hr"
          @input="onPickTime"
        ></v-time-picker>
      </v-tab-item>
    </v-tabs-items>
  </v-menu>
</template>
<script>
export default {
  name: 'DatePicker',
  data: () => ({
    tab: 'Date',
    timeMenu: false,
    input: {
      date: null,
      time: null,
    },
  }),
  props: {
    time: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: '',
    },
  },
  watch: {
    time: {
      immediate: true,
      handler(val) {
        if (val !== null) {
          this.input.time = val;
        }
      },
    },
  },
  methods: {
    onPickDate() {
      this.tab = 'Time';
    },
    onPickTime() {
      this.timeMenu = false;
      const date = this.input.date.split('-');
      const time = this.input.time.split(':');
      this.$emit('onPickTime', new Date(date[0], date[1], date[2], time[0], time[1]));
    },
  },
};
</script>
