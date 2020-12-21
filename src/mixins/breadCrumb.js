export default {
    data() {
        return {
            breadList: []
        }
    },
    created() {
        this.getBreadcrumb();
    },
    watch: { //监听
        $route() {
            this.getBreadcrumb();
        }
    },
    methods: {
        getBreadcrumb() {
            //获取面包屑
            this.breadList = this.$route.meta.bread ? this.$route.meta.bread : [];
        }
    }
}