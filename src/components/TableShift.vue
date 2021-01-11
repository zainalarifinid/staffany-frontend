<!-- eslint-disable max-len -->
<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in listShift"
          :key="data.name"
        >
          <td>{{ data.name }}</td>
          <td>{{ data.date }}</td>
          <td>{{ data.startTime }}</td>
          <td>{{ data.endTime }}</td>
          <td>
            <v-btn
              elevation="2"
              @click="onChangeData(data.id)"
            >Edit</v-btn>
            <v-btn
              elevation="2"
              @click="onRemoveData(data.id)"
            >Delete</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>

export default {
  name: 'ListShift',
  data: () => ({
  }),
  props: {
    listShift: {
      type: Array,
      default: () => ({}),
    },
  },
  methods: {
    onChangeData(idShift) {
      this.$emit('onChangeData', idShift);
    },
    onRemoveData(idShift) {
      this.$emit('onRemoveData', idShift);
    },
  },
};
</script>
