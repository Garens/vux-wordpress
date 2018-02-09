<template>
	<div style="width: 100%; height: 100%;">
		<view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px" style="width: 100%; position: fixed;">
			<x-header slot="header" :right-options="{showMore: true}" @on-click-more="showMenus = true" style="position: fixed; width: 100%;z-index: 9999;">主页</x-header>
			<div>
				<actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
			</div>
			<router-view></router-view>
			<tabbar slot="bottom">
				<tabbar-item selected>
					<i slot="icon" class="fa fa-home"></i>
					<span slot="label">主页</span>
				</tabbar-item>
				<tabbar-item>
					<i slot="icon" class="fa fa-bars"></i>
					<span slot="label">分类</span>
				</tabbar-item>
				<tabbar-item show-dot>
					<i slot="icon" class="fa fa-edit"></i>
					<span slot="label">留言</span>
				</tabbar-item>
				<tabbar-item badge="2">
					<i slot="icon" class="fa fa-info-circle"></i>
					<span slot="label">关于</span>
				</tabbar-item>
			</tabbar>
		</view-box>
	</div>
</template>

<script>
	import {
		XHeader,
		Actionsheet,
		Cell,
		Icon,
		ViewBox,
		ButtonTabItem,
		Tabbar,
		TabbarItem,
		Group
	} from "vux";
	export default {
		data() {
			return {
				showMenus: false,
				menus: {
					menu1: 'menu1',
					menu2: 'menu2'
				}
			};
		},
		components: {
			XHeader,
			Actionsheet,
			Cell,
			Icon,
			ViewBox,
			Tabbar,
			TabbarItem,
			Group
		},
		beforeCreate() {
			console.log(this.$store)
			this.$store.dispatch('getCategorieList');
			this.$store.dispatch('getUserList');
		},
		mounted() {
		},
		methods: {
			initCategories() {
				this.$store.dispatch('getCategorieList');
				this.$store.dispatch('getUserList');
				console.log(111)
			}
		}
	}
</script>

<style scoped>

</style>