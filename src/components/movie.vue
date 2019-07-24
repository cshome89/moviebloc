<template>
    <section class="sub_cont">
        <div class="sub_top">
            <a href="#" class="sub_photo"><img src="images/img_photo_200_200.png" alt=""></a>
            <h2 class="tit_sub_cont">Jason Born</h2>
            <p class="txt_sub_cont large">27 Follower / 45 Following</p>
            <p class="txt_sub_cont small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        </div>
        <div class="tab_wrap">
            <div class="container">
                <ul class="tab c8 j_tab">
                    <li><a href="#">Statistics</a></li>
                    <li><a href="#">Activity</a></li>
                    <li><a href="#">Wallet</a></li>
                    <li><a href="#">Theater</a></li>
                    <li><a href="#">Review</a></li>
                    <li><a href="#">Subtitles</a></li>
                    <li class="active"><a href="#">Movie</a></li>
                    <li><a href="#">Setting</a></li>
                </ul>
            </div>
        </div>
        <div class="movie_wrap">
            <h3 class="tit_movie">Submit your movie & monetize.</h3>
            <p class="txt_movie">당신의 영화는 국경과 언어의 벽을 넘어 모든 사람에게 영감을 줄 수 있습니다. 무비블록은 당신을 위한 온라인 멀티플렉스입니다. 업로드 하는 순간 전 세계에 개봉됩니다.</p>
            <router-link to="/movieUpload"><button class="button max ok">Upload a Movie</button></router-link>
        </div>
    </section>
</template>
<script>
    export default{

    }
</script>