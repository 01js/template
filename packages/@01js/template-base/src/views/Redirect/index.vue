<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class Index extends Vue {
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  }

  protected render(h:any) {
    return h() // avoid warning message
  }
}
</script>

<style lang="scss">
</style>
