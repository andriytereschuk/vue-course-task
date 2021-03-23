<template>
  <nav>
    <router-link to="/characters">Characters</router-link>
    <router-link to="/favourites">Favourites</router-link>
  </nav>
  <router-view />
</template>

<style>
  .btn {
    @apply py-2 px-4 font-semibold rounded-lg shadow-md;
  }

  .btn-green {
    @apply text-white bg-green-500 hover:bg-green-700;
  }
</style>
