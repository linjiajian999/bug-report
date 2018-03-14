<template>
  <md-card>
    <md-card-header>
      <div class="md-title">描述：</div>
    </md-card-header>

    <md-card-content>
      <md-field>
        <label>请输入具体描述</label>
        <md-textarea v-model="textarea" md-counter="80"></md-textarea>
      </md-field>
    </md-card-content>

    <!-- <md-card-actions>
      <md-button>Action</md-button>
      <md-button>Action</md-button>
    </md-card-actions> -->
  </md-card>
</template>
<script>
export default {
  name: 'description',
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
