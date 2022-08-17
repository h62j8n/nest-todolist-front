<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileComp",
});
</script>

<template>
  <div class="profile-card card">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <div class="thumb-box border rounded">
            <img src="../assets/thumb_profile.png" alt="" />
          </div>
          <div>
            <div class="txt-username mb-1">${name}</div>
            <div class="text-muted">${email}</div>
          </div>
        </div>
        <div>
          <router-link to="/" class="btn btn-info btn-sm">
            <font-awesome-icon icon="pen-to-square" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.thumb-box {
  width: 100px;
  height: 100px;
  margin-right: 1rem;
  img {
    max-width: 100%;
  }
}
.txt-username {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
