<template>
  <v-container>
    <v-row>
      <dialog-shift
        :openDialog="openDialog"
        @save="saveDialog"
      ></dialog-shift>
    </v-row>
    <v-row>
      <table-shift
        :listShift="listShift"
        @onChangeData="onChangeData"
        @onRemoveData="onRemoveData"
      ></table-shift>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import DialogShift from '../components/DialogShift';
import TableShift from '../components/TableShift';

export default {
  name: 'ListShift',
  data: () => ({
    openDialog: false,
    isEdit: false,
    editedIdShift: null,
  }),
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
        if (this.isEdit) {
          await this.requestUpdateShift(this.editedIdShift, data);
        } else {
          await this.requestAddShift(data);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
    onChangeData(idShift) {
      this.openDialog = true;
      this.editedIdShift = idShift;
    },
    onRemoveData(idShift) {
      this.requestRemoveShift(idShift);
    },
  },
  components: { DialogShift, TableShift },
};
</script>
