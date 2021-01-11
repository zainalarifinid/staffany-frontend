<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Add Shift
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Data Shift</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
            >
              <v-text-field
                label="Name*"
                v-model="input.name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <date-picker
                @onPickDate="onPickDate"
              />
            </v-col>
            <v-col cols="12" sm="6" >
              <time-picker
                label="Start Time"
                @onPickTime="onPickStartTime"
              ></time-picker>
            </v-col>
            <v-col cols="12" sm="6" >
              <time-picker
                label="End Time"
                @onPickTime="onPickEndTime"
              ></time-picker>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="dialog = false"
        >
          Close
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="submit"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import DatePicker from './common/DatePicker';
import TimePicker from './common/TimePicker';

export default {
  name: 'DialogShift',
  data: () => ({
    dialog: false,
    dateMenu: false,
    dateVal: null,
    input: {
      name: '',
      date: null,
      startTime: null,
      endTime: null,
    },
  }),
  props: {
    openDialog: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    openDialog: {
      immediate: true,
      handler(val) {
        this.dialog = val;
      },
    },
  },
  methods: {
    onPickDate(value) {
      this.input.date = value;
    },
    onPickStartTime(value) {
      this.input.startTime = value;
    },
    onPickEndTime(value) {
      this.input.endTime = value;
    },
    submit() {
      this.dialog = false;
      this.$emit('save', this.input);
    },
  },
  components: { DatePicker, TimePicker },
};
</script>
