<template>
  <div class="min-h-screen flex flex-col bg-slate-100 text-slate-800">
    <header class="bg-blue-700 text-white">
      <div class="flex items-center justify-between px-4 py-4">
        <div class="flex items-center gap-3">
          <img src="@/assets/images/logo.png" class="h-10" />
          <h1 class="text-xl font-bold">Agence de Voyages</h1>
        </div>

        <nav class="flex gap-4">
          <router-link to="/" class="hover:underline">Accueil</router-link>
          <router-link to="/forfaits" class="hover:underline"
            >Forfaits</router-link
          >
          <router-link to="/apropos" class="hover:underline"
            >À propos</router-link
          >
        </nav>
      </div>
    </header>

    <main class="grow px-4 py-8">
      <router-view />
    </main>
    <footer class="bg-gray-800 text-white py-6 mt-auto">
      <div class="flex justify-center gap-6">
        <a href="https://www.facebook.com" target="_blank">
          <img
            src="@/assets/icons/facebook.png"
            class="h-6 cursor-pointer hover:scale-110 transition"
          />
        </a>

        <a href="https://www.instagram.com" target="_blank">
          <img
            src="@/assets/icons/instagram.png"
            class="h-6 cursor-pointer hover:scale-110 transition"
          />
        </a>

        <a href="https://www.twitter.com" target="_blank">
          <img
            src="@/assets/icons/twitter.png"
            class="h-6 cursor-pointer hover:scale-110 transition"
          />
        </a>
      </div>

      <p class="text-center text-sm mt-4">© 2026 Agence de Voyages</p>
    </footer>
  </div>
</template>
