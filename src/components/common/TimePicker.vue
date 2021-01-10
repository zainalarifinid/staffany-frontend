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
    <v-time-picker
      v-model="input.time"
      format="24hr"
      @input="onPickTime"
    ></v-time-picker>
  </v-menu>
</template>
<script>
export default {
  name: 'DatePicker',
  data: () => ({
    timeMenu: false,
    input: {
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
    onPickTime() {
      this.timeMenu = false;
      this.$emit('onPickTime', this.input.time);
    },
  },
};
</script>
