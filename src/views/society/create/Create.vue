<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" text color="primary" v-if="!hasContent">
        <v-icon left>mdi-view-grid-plus-outline</v-icon>
        创建社团
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar dark color="primary">创建社团</v-toolbar>
        <v-card-text>
          <v-form ref="form">
            <v-text-field
              label="社团名称"
              prepend-inner-icon="mdi-account-supervisor-outline"
              v-model="name"
              ref="name"
            ></v-text-field>
            <v-text-field
              label="社团类型"
              prepend-inner-icon="mdi-collage"
              v-model="type"
              ref="type"
            ></v-text-field>
            <v-textarea
              label="社团简介"
              prepend-inner-icon="mdi-script-text-outline"
              v-model="describe"
              ref="describe"
            ></v-textarea>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn
            class="warning lighten-1"
            depressed
            @click="
              {
                (dialog.value = false), resetForm();
              }
            "
            >关闭</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn class="success lighten-1" depressed @click="createCommunity"
            >创建</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
import { request } from "@/utils/request";
export default {
  props: ["hasContent"],
  data() {
    return {
      name: null,
      type: null,
      describe: null,
      formHasErrors: false,
    };
  },
  computed: {
    form() {
      return {
        name: this.name,
        type: this.type,
        describe: this.describe,
      };
    },
  },
  methods: {
    resetForm() {
      this.$refs.form.reset();
    },
    createCommunity() {
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) {
          this.formHasErrors = true;
        }
        this.$refs[f].validate(true);
      });
      if (this.formHasErrors === false) {
        request({
          url: "/community/createcommunity",
          method: "post",
          data: this.form,
        })
          .then((res) => {
            console.log("创建成功");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      this.reload();
    },
  },
};
</script>
<style scoped>
</style>