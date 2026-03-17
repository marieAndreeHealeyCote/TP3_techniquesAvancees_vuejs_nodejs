<template>
  <div>
    <h3 class="text-2xl font-bold mb-4">Liste des forfaits</h3>

    <div v-if="forfaits.length === 0" class="alert alert-info">
      Aucun forfait disponible
    </div>

    <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="f in forfaits"
        :key="f.id"
        class="bg-white rounded-xl shadow overflow-hidden"
      >
        <img :src="f.image" class="w-full h-48 object-cover" />

        <div class="p-4">
          <h4 class="text-xl font-bold">{{ f.nom }}</h4>
          <p class="text-gray-600">{{ f.description }}</p>
          <p class="font-semibold mt-2">{{ f.prix }} $</p>
          <p class="text-sm">{{ f.categorie }}</p>

          <div class="flex gap-2 mt-3">
            <button @click="$emit('edit', f)" class="btn btn-warning">
              Modifier
            </button>

            <button @click="$emit('delete', f.id)" class="btn btn-danger">
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
  props: ["forfaits"],
};
</script>
