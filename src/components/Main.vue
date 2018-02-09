<template>
	<div style="padding: 10px;" id="content">
		<div class="notice">
			<div style="margin: -10px; margin-bottom: 0px; overflow: hidden;">
				<masker>
					<div class="m-img" :style="{backgroundImage: 'url(' + notice.img + ')'}"></div>
					<div slot="content" class="m-content">
						<div class="m-title">
							{{title}}
						</div>
						<div class="m-notice">
							<marquee>
								<marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="align-middle">滚动 {{i}}</marquee-item>
							</marquee>
						</div>
					</div>
				</masker>
			</div>
		</div>
		<div class="content">
			<div v-for="item of articleList">
				<card :header="{title: item.title.rendered }" :footer="{title: '阅读全文',link:'/article/?id=' + item.id}">
					<div slot="content" class="card-padding">
						<cate-list :cate="item.categories" :pubDate="item.date" :author="item.author"></cate-list>
						<p v-html="item.excerpt.rendered"></p>
					</div>
				</card>
			</div>
		</div>
		<p class="pagging">
			<span style="float: left;" v-if="page != 1">
					<x-button mini @click.native="changePage('up')"><i class="fa fa-angle-left" aria-hidden="true"></i>上一页</x-button>
				</span>
			<span style="float: right;" v-if="!lastPage">
					<x-button mini @click.native="changePage">下一页<i class="fa fa-angle-right" aria-hidden="true"></i></x-button>
				</span>
		</p>
		<divider>我是有底线的</divider>
	</div>
</template>

<script>
	import {
		Masker,
		Marquee,
		Card,
		MarqueeItem,
		Divider,
		XButton
	} from 'vux';
	import CateList from './CateList.vue';
	import {
		mapActions,
		mapState,
		mapGetters
	} from 'vuex';
	export default {
		name: 'main-cont',
		data() {
			return {
				page: 1,
				lastPage: false,
				articleList: [],
				cateList: [],
				title: '灵魂守护者',
				notice: {
					title: '111',
					img: '/src/assets/vux_logo.png'
				}
			}
		},
		components: {
			Masker,
			Marquee,
			Card,
			MarqueeItem,
			CateList,
			Divider,
			XButton
		},
		mounted() {
			this.initArticleList();
		},
		computed: {
		},
		methods: {
			async initArticleList() {
				const res = await this.$http.get('/api/posts?page=' + this.page);
				// console.log(res);
				if (res.status == 200) {
					this.articleList = res.data;
					if(this.articleList.length < 10) {
						this.lastPage = true;
					} else {
						this.lastPage = false;
					}
					document.getElementById('vux_view_box_body').scrollTop = 0;
				}
			},
			linkToArticle(id) {
				console.log(id)
			},
			//切换页码
			changePage(flag) {
				if(flag == 'up' && this.page != 1) {
					this.page -= 1;
				} else {
					this.page += 1;
				}
				this.initArticleList();
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.notice {
		padding-bottom: 5px;
	}
	.m-content {
		color: #fff;
	}
	.m-title {
		padding: 10px 20px;
		font-size: 26px;
		letter-spacing: 1px;
	}
	.m-img {
		padding-bottom: 33%;
		display: block;
		position: relative;
		max-width: 100%;
		background-size: cover;
		background-position: center center;
		cursor: pointer;
		border-radius: 2px;
		background-size: 100% 100%;
	}
	.m-notice {
		text-align: center;
		text-shadow: 0 0 2px rgba(0, 0, 0, .5);
		font-weight: 500;
		font-size: 16px;
		position: absolute;
		left: 0;
		right: 0;
		width: 100%;
		text-align: center;
		top: 80%;
		transform: translateY(-50%);
	}
	.m-time {
		font-size: 12px;
		padding-top: 4px;
		border-top: 1px solid #f0f0f0;
		display: inline-block;
		margin-top: 5px;
	}
	.card-padding {
		padding: 5px 15px 10px;
	}
	.pagging {
		padding: 10px 15px;
		height: 30px;
	}
	.pagging i {
		padding: 0px 5px;
	}
</style>
<style>
	.weui-panel__hd {
		color: #555!important;
		font-size: 16px!important;
		font-weight: bold;
	}
	.weui-cell__bd {
		text-align: right;
	}
	#vux_view_box_body {		
		transition: all 11.3s ease;
	}
</style>

