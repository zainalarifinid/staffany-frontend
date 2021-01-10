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
};
</script>
