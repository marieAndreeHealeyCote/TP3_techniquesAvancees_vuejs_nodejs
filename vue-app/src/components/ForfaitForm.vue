<template>
  <div class="mb-8 bg-white p-6 rounded-xl shadow">
    <h3 class="text-2xl font-bold mb-4">
      {{ form.id ? "Modifier un forfait" : "Ajouter un forfait" }}
    </h3>

    <form @submit.prevent="handleSubmit" class="space-y-3">
      <div>
        <label class="form-label font-semibold">Nom</label>
        <input
          v-model="form.nom"
          type="text"
          :class="['form-control', { 'is-invalid': errors.nom }]"
        />
        <p v-if="errors.nom" class="text-danger mt-1">{{ errors.nom }}</p>
      </div>

      <div>
        <label class="form-label font-semibold">Description</label>
        <textarea
          v-model="form.description"
          rows="3"
          :class="['form-control', { 'is-invalid': errors.description }]"
        ></textarea>
        <p v-if="errors.description" class="text-danger mt-1">
          {{ errors.description }}
        </p>
      </div>

      <div>
        <label class="form-label font-semibold">Prix</label>
        <input
          v-model.number="form.prix"
          type="number"
          step="0.01"
          :class="['form-control', { 'is-invalid': errors.prix }]"
        />
        <p v-if="errors.prix" class="text-danger mt-1">{{ errors.prix }}</p>
      </div>

      <div>
        <label class="form-label font-semibold">Image (URL)</label>
        <input
          v-model="form.image"
          type="text"
          :class="['form-control', { 'is-invalid': errors.image }]"
          placeholder="https://exemple.com/image.jpg ou /images/costa_rica.webp"
        />
        <p v-if="errors.image" class="text-danger mt-1">{{ errors.image }}</p>
      </div>

      <div>
        <label class="form-label font-semibold">Catégorie</label>
        <input
          v-model="form.categorie"
          type="text"
          :class="['form-control', { 'is-invalid': errors.categorie }]"
        />
        <p v-if="errors.categorie" class="text-danger mt-1">
          {{ errors.categorie }}
        </p>
      </div>

      <div class="flex gap-3 mt-4">
        <button type="submit" class="btn btn-success">
          {{ form.id ? "Mettre à jour" : "Ajouter" }}
        </button>

        <button
          v-if="form.id"
          type="button"
          @click="cancel"
          class="btn btn-secondary"
        >
          Annuler
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ForfaitForm",
  props: {
    selectedForfait: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      form: {
        id: null,
        nom: "",
        description: "",
        prix: "",
        image: "",
        categorie: "",
      },
      errors: {
        nom: "",
        description: "",
        prix: "",
        image: "",
        categorie: "",
      },
    };
  },
  watch: {
    selectedForfait: {
      immediate: true,
      handler(val) {
        if (val) {
          this.form = { ...val };
          this.clearErrors();
        } else {
          this.reset();
        }
      },
    },
  },
  methods: {
    clearErrors() {
      this.errors = {
        nom: "",
        description: "",
        prix: "",
        image: "",
        categorie: "",
      };
    },
    isValidImagePath(value) {
      if (!value || !value.trim()) return false;

      const trimmedValue = value.trim();

      if (trimmedValue.startsWith("/images/")) {
        return true;
      }

      try {
        const url = new URL(trimmedValue);
        return url.protocol === "http:" || url.protocol === "https:";
      } catch {
        return false;
      }
    },
    validateForm() {
      this.clearErrors();
      let isValid = true;

      if (!this.form.nom || !this.form.nom.trim()) {
        this.errors.nom = "Le nom est obligatoire.";
        isValid = false;
      }

      if (!this.form.description || !this.form.description.trim()) {
        this.errors.description = "La description est obligatoire.";
        isValid = false;
      }

      if (
        this.form.prix === "" ||
        this.form.prix === null ||
        Number(this.form.prix) <= 0
      ) {
        this.errors.prix = "Le prix doit être supérieur à 0.";
        isValid = false;
      }

      if (!this.form.image || !this.form.image.trim()) {
        this.errors.image = "L’image est obligatoire.";
        isValid = false;
      } else if (!this.isValidImagePath(this.form.image)) {
        this.errors.image =
          "L’image doit être une URL valide (http/https) ou un chemin du type /images/nom-image.webp.";
        isValid = false;
      }

      if (!this.form.categorie || !this.form.categorie.trim()) {
        this.errors.categorie = "La catégorie est obligatoire.";
        isValid = false;
      }

      return isValid;
    },
    handleSubmit() {
      if (!this.validateForm()) {
        return;
      }

      this.$emit("save", { ...this.form });
      this.reset();
    },
    reset() {
      this.form = {
        id: null,
        nom: "",
        description: "",
        prix: "",
        image: "",
        categorie: "",
      };
      this.clearErrors();
    },
    cancel() {
      this.reset();
      this.$emit("cancel-edit");
    },
  },
};
</script>
