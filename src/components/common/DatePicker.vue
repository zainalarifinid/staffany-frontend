<template>
  <v-menu
    v-model="dateMenu"
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
        label="Date*"
        readonly
        :value="input.date"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      locale="en-in"
      v-model="input.date"
      no-title
      @input="onPickDate"
    ></v-date-picker>
  </v-menu>
</template>
<script>
export default {
  name: 'DatePicker',
  data: () => ({
    dateMenu: false,
    input: {
      date: null,
    },
  }),
  props: {
    date: {
      type: Date,
      default: null,
    },
  },
  watch: {
    date: {
      immediate: true,
      handler(val) {
        if (val !== null) {
          this.input.date = val;
        }
      },
    },
  },
  methods: {
    onPickDate() {
      this.dateMenu = false;
      this.$emit('onPickDate', this.input.date);
    },
  },
};
</script>
