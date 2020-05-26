<template>
  <div class="userinfo-container">
    <a-descriptions :title="$t('user.title')" bordered>
      <a-descriptions-item label="Product">
        Cloud Database
      </a-descriptions-item>
      <a-descriptions-item label="Billing Mode">
        Prepaid
      </a-descriptions-item>
      <a-descriptions-item label="Automatic Renewal">
        YES
      </a-descriptions-item>
      <a-descriptions-item label="Order time">
        2018-04-24 18:00:00
      </a-descriptions-item>
      <a-descriptions-item label="Usage Time" :span="2">
        2019-04-24 18:00:00
      </a-descriptions-item>
      <a-descriptions-item label="Status" :span="3">
        <a-badge status="processing" text="Running" />
      </a-descriptions-item>
      <a-descriptions-item label="Negotiated Amount">
        $80.00
      </a-descriptions-item>
      <a-descriptions-item label="Discount">
        $20.00
      </a-descriptions-item>
      <a-descriptions-item label="Official Receipts">
        $60.00
      </a-descriptions-item>
      <a-descriptions-item label="Config Info">
        11111111
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script>
export default {
  name: 'userinfo',
  created () {
    console.log('userinfo')
  }
}
</script>

<style lang="scss" scoped>
  .userinfo-container {
    @include viewGlobalStyle();
  }
</style>
