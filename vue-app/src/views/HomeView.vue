<template>
  <section class="text-center py-10">
    <h2 class="text-4xl font-bold mb-6">
      Découvrez votre prochaine destination
    </h2>

    <router-link to="/forfaits" class="block max-w-4xl mx-auto group">
      <img
        src="@/assets/images/maldives.webp"
        alt="Destination"
        class="rounded-xl shadow-lg transition duration-300 group-hover:scale-105"
      />

      <div
        class="mt-4 text-lg font-semibold text-blue-700 group-hover:underline"
      >
        Voir nos forfaits →
      </div>
    </router-link>
  </section>
</template>
