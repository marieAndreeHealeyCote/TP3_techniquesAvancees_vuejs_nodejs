<template>
  <div>
    <h3 class="mb-4 text-2xl font-bold">Liste des forfaits</h3>

    <div
      v-if="!forfaits || forfaits.length === 0"
      class="rounded-2xl bg-white p-6 text-center shadow"
    >
      Aucun forfait disponible pour le moment.
    </div>

    <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="forfait in forfaits"
        :key="forfait.id"
        class="overflow-hidden rounded-2xl bg-white shadow"
      >
        <img
          :src="forfait.image"
          :alt="forfait.nom"
          class="h-48 w-full object-cover"
        />

        <div class="p-4">
          <h4 class="mb-2 text-xl font-bold">{{ forfait.nom }}</h4>
          <p class="mb-2 text-slate-600">{{ forfait.description }}</p>
          <p class="mb-1 font-semibold">Catégorie : {{ forfait.categorie }}</p>
          <p class="mb-4 text-lg font-bold text-blue-700">
            {{ forfait.prix }} $
          </p>

          <div class="flex gap-3">
            <button
              @click="$emit('edit', forfait)"
              class="rounded-lg bg-yellow-500 px-4 py-2 text-white"
            >
              Modifier
            </button>

            <button
              @click="$emit('delete', forfait.id)"
              class="rounded-lg bg-red-600 px-4 py-2 text-white"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForfaitList",
  props: {
    forfaits: {
      type: Array,
      required: true,
    },
  },
};
</script>
