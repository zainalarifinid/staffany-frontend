<template>
  <v-container>
    <v-row>
      <dialog-shift
        @save="saveDialog"
      ></dialog-shift>
    </v-row>
    <v-row>
      <table-shift :listShift="listShift" ></table-shift>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import DialogShift from '../components/DialogShift';
import TableShift from '../components/TableShift';

export default {
  name: 'ListShift',
  async mounted() {
    await this.requestListShift();
  },
  computed: {
    ...mapGetters('ShiftModule', ['listShift']),
  },
  methods: {
    ...mapActions('ShiftModule', ['requestListShift', 'requestAddShift', 'requestUpdateShift', 'requestRemoveShift']),
    async saveDialog(data) {
      try {
        await this.requestAddShift(data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
  },
  components: { DialogShift, TableShift },
};
</script>
