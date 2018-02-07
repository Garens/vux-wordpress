<template>
	<div style="padding: 10px;">
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
								<marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</marquee-item>
							</marquee>
						</div>
					</div>
				</masker>
			</div>
		</div>
		<div class="content">
			<card :header="{title: '111111' }" :footer="{title: '更多',link:'/article'}">
				<p slot="content" class="card-padding">{{ 'sasasa' }}</p>
			</card>
			<card :header="{title: '22222' }" :footer="{title: '更多',link:'/article'}">
				<p slot="content" class="card-padding">{{ ' 我用的是vux起的一个项目（移动端，基于vue的），因为是移动端的，需要在手机上测试，发现用http://localhost:8081/访问的挺好的，但是换到ip就访问不了，期初我以为是代理的原因，将电脑的代理给关掉了。还是不行，然后改为127.0.0.1访问，发现可以访问，用0.0.0.0访问也可以，就是ip不行。然后就各种google，百度。别人家的方法---都试了好多，发现没效（有点怀疑人生，怀疑是不是我电脑的问题），但是结果就在这，ip就是不可以访问！！！！' }}</p>
			</card>
			<card :header="{title: '3333' }" :footer="{title: '更多',link:'/component/panel'}">
				<p slot="content" class="card-padding">{{ 'sasasa' }}</p>
			</card>
			<p v-for="item in 100">{{item}}</p>
		</div>
	</div>
</template>

<script>
	import {
		Masker,
		Marquee,
		Card,
		MarqueeItem
	} from 'vux'
	export default {
		name: 'HelloWorld1111',
		data() {
			return {
				title: '欢迎你啦',
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
			MarqueeItem
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
		letter-spacing: 8px;
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
		padding: 15px;
	}
</style>
<style>
	.weui-panel__hd {
		color: #555!important;
		font-size: 16px!important;
		font-weight: bold;
	}
</style>

