<template>
	<section>
	    <div class="video_wrap">
	        <img src="images/img_video.jpg" alt="" style="width:100%;"/>
	    </div>
	    <div class="container">
	        <div class="video_info">
	            <h2 class="txt_name">Childhood's End</h2>
	            <p class="txt_info">Joshua Yoon / Drama / 97m / <img src="images/svg/icon_star_a.svg" alt="★">74%</p>
	            <p class="txt_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
	            <div class="btn_bar">
	                <a href="#" class="btn btn_video btn_small btn_play">$0.8</a>
	                <a href="#" class="btn btn_video btn_small btn_watch_add">Add to watchlist</a>
	                <a href="#" class="btn btn_video btn_small btn_detail">View details</a>
	            </div>
	            <p class="txt_audio">
	                <span>Audio : Korean</span>
	                Subtitle : Dansk, Deutsch, English, Español (Latinoamérica), Español (España), Français, Indonesia, Italiano, 한국어, Nederlands, Norsk, Polski, Português (Brasil), Português (Portugal), Русский, Svenska, Türkçe, 中文 /
	                <a href="#">Create subtitles and monetize</a>
	            </p>
	
	            <a href="#" class="img_photo">
	                <img src="images/img_swiper_150_150_01.png" alt="" />
	            </a>
	            <p class="txt_info">Thomas Nicolas</p>
	            <p class="txt_desc">
	                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
	            </p>
	            <div class="btn_bar">
	                <a href="#" class="btn btn_video btn_small btn_follow">Follow</a>
	                <a href="#" class="btn btn_video btn_small btn_bloc">.Bloc</a>
	                <a href="#" class="btn btn_video btn_small btn_mbl">Become a patron</a>
	            </div>
	        </div>
	
	        <div class="item_detail video_review">
	            <h2 class="tit_detail">Review</h2>
	            <ul class="list_review">
	                <li>
	                    <p>Etiam vitae libero ut sem sodales malesuada eu eu ligula. Vivamus at suscipit massa. Sed nulla augue, porttitor vitae suscipit in, euismod malesuada risus. Cras lorem erat, tristique nec aliquet non, ultricies lobortis tortor. Morbi nec ligula nunc. Vestibulum eu sem vel sem volutpat gravida. Nullam in quam kdkjd asad  asdsaaaq...</p>
	                    <a href="#" class="people">
	                        <img src="images/img_photo_80_80.png" alt="" />
	                        Vilhjálmur Bojan
	                    </a>
	                </li>
	                <li>
	                    <p>우리는 오늘 우리 조선이 독립한 나라임과 조선 사람이 자주적인 민족임을 선언한다. 이로써 세계 모든 나라에 알려 인류 평등의 큰 뜻을 분명히 밝히며, 이를 자손만대에 깨우쳐 일러, 민족의 독자적 생존의 정당한 권리를 영원히 누리도록 하는 바이다. 반 만 년 역사의 권위를 의지하여 이를 선언하며, 2천 만 민중의 충성을 모아 이를 두루 펴 밝히며, 겨레의 한결같은 자유 발전...</p>
	                    <a href="#" class="people">
	                        <img src="images/img_photo_80_80.png" alt="" />
	                        Risto Raffaella
	                    </a>
	                </li>
	                <li>
	                    <p>Лорем ипсум долор сит амет, ут яуот граецо еам. Не при яуод еффициенди, суммо тритани яуи ех. Нонумес фуиссет ид сит, ан яуи интегре лобортис перицула. Сит симул елаборарет инструцтиор ан, оратио платонем малуиссет еам еу. Ат еум примис путант. Еум но ратионибус волуптатибус, убияуе сапиент. Лобртис...</p>
	                    <a href="#" class="people">
	                        <img src="images/img_photo_80_80.png" alt="" />
	                        Titu Mikaere
	                    </a>
	                </li>
	            </ul>
	            <div class="btn_bar">
	                <a href="#" class="btn btn_video btn_small btn_text">View all review</a>
	                <a href="#" class="btn btn_video btn_small btn_edit" v-on:click="isReview = !isReview">Write a review</a>
	            </div>
	        </div>
	
	        <div class="item_detail video_staff">
	            <h2 class="tit_detail">Staff & Director’s Comment</h2>
	            <p class="txt_staff">
	                Director: Lucas Hrubizna
	                <br/>Producer: Joaquin Cardoner
	                <br/>Cinematographer: Blake Davey
	                <br/>Editor: Lucas Hrubizna
	                <br/>Visual Effects: Lucas Hrubizna
	                <br/>Colourist: Lucas Hrubizna
	                <br/>1st Assistant Director: Brock Newman
	                <br/>Production Designer: Charlie Hannah
	                <br/>1st Assistant Camera: Farhad Ghaderi
	                <br/>2nd Assistant Camera: Michael Reimer
	                <br/>Special Effects Supervisor: Keifer Dallison
	                <br/>1st Assistant Special Effects: Hayden Dallison
	                <br/>Makeup Artist: Kristen Foote
	                <br/>We acknowledge the support of the Canada Council for the Arts.
	            </p>
	        </div>
	
	        <div class="item_detail video_people">
	            <h2 class="tit_detail">Curator</h2>
	            <ul class="list_video_people">
	                <li>
	                    <a href="#">
	                        <span class="img_people"><img src="images/img_people_150_150.png" alt=""/></span>
	                        <p class="txt_name">Aina Isabel</p>
	                        <p class="txt_desc">Cinema Paridiso</p>
	                    </a>
	                </li>
	                <li>
	                    <a href="#">
	                        <span class="img_people"><img src="images/img_people_150_150.png" alt=""/></span>
	                        <p class="txt_name">Úlfr Nisa</p>
	                        <p class="txt_desc">Movie Planet</p>
	                    </a>
	                </li>
	                <li>
	                    <a href="#">
	                        <span class="img_people"><img src="images/img_people_150_150.png" alt=""/></span>
	                        <p class="txt_name">Richárd Steffi</p>
	                        <p class="txt_desc">SF Maniac theater</p>
	                    </a>
	                </li>
	            </ul>
	            <div class="btn_bar">
	                <a href="#" class="btn btn_video btn_small btn_text">View all curator</a>
	            </div>
	        </div>
	
	        <div class="item_detail video_people">
	            <h2 class="tit_detail">Translator</h2>
	            <ul class="list_video_people">
	                <li>
	                    <a href="#">
	                        <span class="img_people"><img src="images/img_people_150_150.png" alt=""/></span>
	                        <p class="txt_name">Ambroos Diodorus</p>
	                        <p class="txt_desc">Español (Latinoamérica)</p>
	                    </a>
	                </li>
	                <li>
	                    <a href="#">
	                        <span class="img_people"><img src="images/img_people_150_150.png" alt=""/></span>
	                        <p class="txt_name">Phượng Hulda</p>
	                        <p class="txt_desc">Français</p>
	                    </a>
	                </li>
	                <li>
	                    <a href="#">
	                        <span class="img_people"><img src="images/img_people_150_150.png" alt=""/></span>
	                        <p class="txt_name">Derya Ebele</p>
	                        <p class="txt_desc">中文</p>
	                    </a>
	                </li>
	            </ul>
	            <div class="btn_bar">
	                <a href="#" class="btn btn_video btn_small btn_text">View all translator</a>
	            </div>
	        </div>
	    </div>
	    <div class="swp_detail swp_video swp_small swp_detail_01">
	        <p class="txt_type">You may also like this</p>
	        <div class="swiper-container swiper-container-horizontal">
	            <div class="swiper-wrapper">
	                <div class="swiper-slide figure_wrap swiper-slide-active">
	                    <a href="#" class="img img_video"><img src="images/img_swiper_260_146_01.jpg" alt=""></a>
	                    <p class="txt_name">Lorem ipsum dolor</p>
	                </div>
	                <div class="swiper-slide figure_wrap swiper-slide-next">
	                    <a href="#" class="img img_video"><img src="images/img_swiper_260_146_01.jpg" alt=""></a>
	                    <p class="txt_name">Mauris augue augue, interdum vitae</p>
	                </div>
	                <div class="swiper-slide figure_wrap">
	                    <a href="#" class="img img_video"><img src="images/img_swiper_260_146_01.jpg" alt=""></a>
	                    <p class="txt_name">Aliquam erat volutpat</p>
	                </div>
	                <div class="swiper-slide figure_wrap">
	                    <a href="#" class="img img_video"><img src="images/img_swiper_260_146_01.jpg" alt=""></a>
	                    <p class="txt_name">Phasellus eleifend malesuada</p>
	                </div>
	                <div class="swiper-slide figure_wrap">
	                    <a href="#" class="img img_video"><img src="images/img_swiper_260_146_01.jpg" alt=""></a>
	                    <p class="txt_name">Aliquam feugiat</p>
	                </div>
	                <div class="swiper-slide figure_wrap">
	                    <a href="#" class="img img_video"><img src="images/img_swiper_260_146_01.jpg" alt=""></a>
	                    <p class="txt_name">Duis eleifend convallis libero eu blandit</p>
	                </div>
	                <div class="swiper-slide figure_wrap">
	                    <a href="#" class="img img_video"><img src="images/img_swiper_260_146_01.jpg" alt=""></a>
	                    <p class="txt_name">Duis eleifend convallis libero eu blandit</p>
	                </div>
	                <div class="swiper-slide figure_wrap">
	                    <a href="#" class="img img_video"><img src="images/img_swiper_260_146_01.jpg" alt=""></a>
	                    <p class="txt_name">Duis eleifend convallis libero eu blandit</p>
	                </div>
	                <div class="swiper-slide figure_wrap">
	                    <a href="#" class="img img_video"><img src="images/img_swiper_260_146_01.jpg" alt=""></a>
	                    <p class="txt_name">Duis eleifend convallis libero eu blandit</p>
	                </div>
	            </div>
	        </div>
	        <div class="swiper-button-prev swiper-button-disabled"></div>
	        <div class="swiper-button-next"></div>
	    </div>
	    <div class="container">
	        <div class="comment_wrap">
	            <p class="tit_comment">
	                댓글 20개
	                <select class="sel_small sel_lightgray">
	                    <option value="">최근 날짜순</option>
	                </select>
	            </p>
	            <div class="inp_comment_wrap">
	                <input type="text" class="text" placeholder="댓글 쓰기"/>
	                <span class="cnt">0/300</span>
	                <div class="btn_wrap">
	                    <button class="button ok">완료</button>
	                </div>
	            </div>
	            <ul class="list_comment">
	                <li>
	                    <div class="item_comment">
	                        <a href="#" class="img_photo"><img src="images/img_photo_80_80.png" alt="" /></a>
	                        <p class="txt_name">
	                            Bond James
	                            <span>5시간 전</span>
	                        </p>
	                        <p class="txt_comment">
	                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sapien justo. Mauris augue augue, interdum vitae congue at, aliquet ac ligula. Morbi elit metus, imperdiet vel pulvinar quis, eleifend in nunc.
	                        </p>
	                        <div class="tool_bar">
	                            <a href="#" class="btn btn_up">124</a>
	                            <a href="#" class="btn btn_down">4</a>
	                            <a href="#" class="btn btn_video btn_small btn_edit">답글 쓰기</a>
	                        </div>
	                        <div class="more_wrap">
	                            <a href="javascript:void(0);" class="btn_more"></a>
	                            <ul>
	                                <li><a href="#" class="btn btn_edit">수정하기</a></li>
	                                <li><a href="#" class="btn btn_del">삭제하기</a></li>
	                            </ul>
	                        </div>
	                    </div>
	                </li>
	                <li>
	                    <div class="item_comment">
	                        <a href="#" class="img_photo"><img src="images/img_photo_80_80.png" alt="" /></a>
	                        <p class="txt_name">
	                            Bond James
	                            <span>5시간 전</span>
	                        </p>
	                        <p class="txt_comment">
	                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sapien justo. Mauris augue augue, interdum vitae congue at, aliquet ac ligula. Morbi elit metus, imperdiet vel pulvinar quis, eleifend in nunc.
	                        </p>
	                        <div class="tool_bar">
	                            <a href="#" class="btn btn_up">124</a>
	                            <a href="#" class="btn btn_down">4</a>
	                        </div>
	                        <div class="inp_comment_wrap sub">
	                            <div class="input_wrap">
	                                <input type="text" class="text" placeholder="댓글 쓰기">
	                                <span class="cnt">0/300</span>
	                            </div>
	                            <div class="btn_wrap">
	                                <button class="button cancel">취소</button>
	                                <button class="button ok">완료</button>
	                            </div>
	                        </div>
	                        <a href="#" class="btn_report_more">답글 2개 보기</a>
	                        <ul class="list_comment sub">
	                            <li>
	                                <div class="item_comment">
	                                    <a href="#" class="img_photo"><img src="images/img_photo_80_80.png" alt="" /></a>
	                                    <p class="txt_name">
	                                        Bond James
	                                        <span>5시간 전</span>
	                                    </p>
	                                    <p class="txt_comment">
	                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sapien justo. Mauris augue augue, interdum vitae congue at, aliquet ac ligula. Morbi elit metus, imperdiet vel pulvinar quis, eleifend in nunc.
	                                    </p>
	                                    <div class="tool_bar">
	                                        <a href="#" class="btn btn_up">124</a>
	                                        <a href="#" class="btn btn_down">4</a>
	                                        <a href="#" class="btn btn_video btn_small btn_edit">답글 쓰기</a>
	                                    </div>
	                                    <div class="more_wrap">
	                                        <a href="javascript:void(0);" class="btn_more"></a>
	                                        <ul>
	                                            <li><a href="#" class="btn btn_report" v-on:click="isReport = !isReport">신고하기</a></li>
	                                        </ul>
	                                    </div>
	                                </div>
	                            </li>
	                            <li>
	                                <div class="item_comment">
	                                    <a href="#" class="img_photo"><img src="images/img_photo_80_80.png" alt="" /></a>
	                                    <p class="txt_name">
	                                        Bond James
	                                        <span>5시간 전</span>
	                                    </p>
	                                    <p class="txt_comment">
	                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <span class="error">//*댓글이나 답글이나 20개씩 인피니티 스크롤 적용 //*아래 댓글 쓰기는 한 줄 넘어갈 경우 입력칸 늘어나도록 작업. (유튜브 댓글 참고)</span>
	                                    </p>
	                                    <div class="tool_bar">
	                                        <a href="#" class="btn btn_up">124</a>
	                                        <a href="#" class="btn btn_down">4</a>
	                                    </div>
	                                    <div class="inp_comment_wrap sub">
	                                        <div class="input_wrap report">
	                                            <span class="txt_user">OhLaLaLa</span>
	                                            <input type="text" class="text" placeholder="댓글 쓰기" value="저는 그 의견에 동의해요 그래서 답글 남겨요.">
	                                            <span class="cnt">0/300</span>
	                                        </div>
	                                        <div class="btn_wrap">
	                                            <button class="button cancel">취소</button>
	                                            <button class="button ok">완료</button>
	                                        </div>
	                                    </div>
	                                    <div class="more_wrap">
	                                        <a href="javascript:void(0);" class="btn_more"></a>
	                                        <ul>
	                                            <li><a href="#" class="btn btn_report">신고하기</a></li>
	                                        </ul>
	                                    </div>
	                                </div>
	                            </li>
	                        </ul>
	                    </div>
	                </li>
	            </ul>
	        </div>
	    </div>
	    <transition name="modal">
	        <div id="pop_review" class="pop_wrap" v-if="isReview">
	            <div class="pop_mask"></div>
	            <div class="pop_cont full">
	                <a href="javascript:pop_hide('pop_review')" class="btn_close"><img src="images/svg/icon_close.svg" alt="Close"></a>
	                <h2 class="tit_pop tit_en">Review: Astronaut in the mountain</h2>
	                <ul class="list_review_full">
	                    <li>
	                        <div class="item_review">
	                            <a href="#" class="img_photo"><img src="images/img_people_150_150.png" alt="" /></a>
	                            <p class="txt_name">Bond James</p>
	                            <p class="txt_desc">
	                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sapien justo. Mauris augue augue, interdum vitae congue at, aliquet ac ligula. Morbi elit metus, imperdiet vel pulvinar quis, eleifend in nunc.
	                                <a href="#">View in new window</a>
	                            </p>
	                        </div>
	                    </li>
	                    <li>
	                        <div class="item_review">
	                            <a href="#" class="img_photo"><img src="images/img_people_150_150.png" alt="" /></a>
	                            <p class="txt_name">Bond James</p>
	                            <p class="txt_desc">
	                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sapien justo. Mauris augue augue, interdum vitae congue at, aliquet ac ligula. Morbi elit metus, imperdiet vel pulvinar quis, eleifend in nunc.
	                                <a href="#">View in new window</a>
	                            </p>
	                        </div>
	                    </li>
	                </ul>
	            </div>
	        </div>
	        <div class="pop_wrap" v-if="isStar">
	            <div class="pop_mask"></div>
	            <div class="pop_cont">
	                <h2 class="tit_pop tit_kr txt_left">별점과 댓글</h2>
	                <div class="form_wrap">
	                    <div class="f_group">
	                        <div class="star_wrap">
	                            <a href="#" class="star on"></a>
	                            <a href="#" class="star on"></a>
	                            <a href="#" class="star on"></a>
	                            <a href="#" class="star"></a>
	                            <a href="#" class="star"></a>
	                        </div>
	                    </div>
	                    <div class="f_group">
	                        <textarea class="textarea" placeholder="댓글 쓰기"></textarea>
	                        <div class="t_cnt">0/300</div>
	                    </div>
	                    <div class="f_group">
	                        <div class="btn_wrap">
	                            <button class="button cancel black">취소</button>
	                            <button class="button ok">확인</button>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div class="pop_wrap" v-if="isReport">
	            <div class="pop_mask"></div>
	            <div class="pop_cont">
	                <h2 class="tit_pop tit_kr txt_left">신고하기</h2>
	                <div class="form_wrap">
	                    <div class="f_group">
	                        <ul class="list_chk">
	                            <li>
	                                <input id="rad_01" type="radio" name="rad_search">
	                                <label for="rad_01">부적절한 홍보,  스팸</label>
	                            </li>
	                            <li>
	                                <input id="rad_02" type="radio" name="rad_search">
	                                <label for="rad_02">차별에 근거한 혐오,  노골적인 폭력</label>
	                            </li>
	                            <li>
	                                <input id="rad_03" type="radio" name="rad_search">
	                                <label for="rad_03">포르노,  음란물</label>
	                            </li>
	                            <li>
	                                <input id="rad_04" type="radio" name="rad_search">
	                                <label for="rad_04">권리 침해, 괴롭힘</label>
	                            </li>
	
	                        </ul>
	                    </div>
	                    <div class="f_group">
	                        <div class="btn_wrap">
	                            <button class="button cancel black">취소</button>
	                            <button class="button ok">확인</button>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </transition>

	</section>
</template>
<script>

	export default {
        data(){
            return {isReview : false, isStar : false, isReport : false}
        }
	}
</script>