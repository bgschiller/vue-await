<template>
  <div class="vue-await">
    <slot v-if="awaiting" />
    <slot v-if="success" name="then" v-bind="value" />
    <slot v-if="error" name="catch" v-bind="err" />
    <slot v-if="none" name="none" />
  </div>
</template>

<script>
function toPromise(obj) {
  if (obj === null || obj === undefined) {
    return obj;
  }
  if (obj.then && obj.catch) {
    // looks like a promise to me *shrug*
    return obj;
  }
  return Promise.resolve(obj);
}

export default {
  name: "Await",
  props: {
    p: Promise
  },
  data() {
    return {
      status: null,
      value: null,
      err: null
    };
  },
  computed: {
    awaiting() {
      return this.status === "awaiting";
    },
    success() {
      return this.status === "success";
    },
    error() {
      return this.status === "error";
    },
    none() {
      return this.status === null;
    }
  },
  watch: {
    p: {
      immediate: true,
      handler: function() {
        let prom = toPromise(this.p);
        if (prom === null || prom === undefined) {
          this.status = null;
          this.value = null;
          this.err = null;
        } else {
          this.status = "awaiting";
          prom
            .then((...v) => {
              this.status = "success";
              this.value = v;
            })
            .catch((...e) => {
              this.status = "error";
              this.err = e;
            });
        }
      }
    }
  }
};
</script>
