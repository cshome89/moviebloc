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
                    <li><a href="#">Movie</a></li>
                    <li class="active"><a href="#">Setting</a></li>
                </ul>
            </div>
        </div>
        <div class="form_wrap container">
            <div class="layout">
                <div class="layout_col col_2">
                    <div class="f_group">
                        <span class="f_tit">프로필 이미지</span>
                        <dl class="setting_photo">
                            <dt>
                                <a href="#" class="img_setting_photo"></a>
                            </dt>
                            <dd>
                                <p class="txt_help">권장 사이즈 : 400x400px</p>
                                <a href="#" class="btn btn_text btn_small btn_lightgray btn_img_upload">업로드</a>
                            </dd>
                        </dl>



                    </div>
                </div>
                <div class="layout_col col_2">
                    <div class="f_group">
                        <span class="f_tit">Synopsis (English) <em>*</em></span>
                        <div class="textarea_wrap">
                            <span class="txt_cnt">226/300</span>
                            <textarea class="text_lightgray">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="layout">
                <div class="layout_col col_2">
                    <div class="f_group">
                        <span class="f_tit">주 사용 언어</span>
                        <select class="sel_lightgray sel_large sel_max">
                            <option value="">한국어</option>
                        </select>
                    </div>
                </div>
                <div class="layout_col col_2">
                    <div class="f_group">
                        <span class="f_tit">보조 언어</span>
                        <select class="sel_lightgray sel_large sel_max">
                            <option value="">English</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="layout">
                <div class="layout_col col_2">
                    <div class="f_group">
                        <span class="f_tit">시청내역</span>
                        <ul class="list_chk setting">
                            <li>
                                <input id="rad_01_01" type="radio" name="rad_01">
                                <label for="rad_01_01">공개</label>
                            </li>
                            <li>
                                <input id="rad_01_02" type="radio" name="rad_01">
                                <label for="rad_01_02">비공개</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="layout_col col_2">
                    <div class="f_group">
                        <span class="f_tit">찜 목록</span>
                        <ul class="list_chk setting">
                            <li>
                                <input id="rad_02_01" type="radio" name="rad_02">
                                <label for="rad_02_01">공개</label>
                            </li>
                            <li>
                                <input id="rad_02_02" type="radio" name="rad_02">
                                <label for="rad_02_02">비공개</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="layout">
                <div class="layout_col col_2">
                    <div class="f_group">
                        <span class="f_tit">국가 설정</span>
                        <select class="sel_lightgray sel_large sel_max">
                            <option value="">International</option>
                        </select>
                    </div>
                </div>
                <div class="layout_col col_2">
                    <div class="f_group">
                        <span class="f_tit">성인 여부</span>
                        <ul class="list_chk setting">
                            <li>
                                <input id="rad_03_01" type="radio" name="rad_03" v-on:click="isAge = !isAge">
                                <label for="rad_03_01">예</label>
                            </li>
                            <li>
                                <input id="rad_03_02" type="radio" name="rad_03">
                                <label for="rad_03_02">아니오</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="btn_form">
                <div class="left">
                    <a href="#" class="button black cancel">비밀번호 변경</a>
                    <a href="#" class="button black cancel" v-on:click="isDel = !isDel">계정 삭제</a>
                </div>
                <div class="right">
                    <a href="#" class="button ok">확인</a>
                </div>
            </div>
        </div>

        <transition name="modal">
            <div class="pop_wrap" v-if="isAge">
                <div class="pop_mask"></div>
                <div class="pop_cont">
                    <h2 class="tit_pop tit_en txt_left">Verify Your Age</h2>
                    <div class="form_wrap">
                        <div class="f_group">
                            <span class="f_tit">Location</span>
                            <select class="lang sel_large sel_black sel_max">
                                <option value="en">South Korea</option>
                            </select>
                        </div>
                        <div class="f_group">
                            <span class="f_tit">Date of birth</span>
                            <div class="birth_wrap">
                                <input type="text" placeholder="DD"/>
                                <input type="text" placeholder="MM"/>
                                <input type="text" placeholder="YYYY"/>
                            </div>
                        </div>
                        <div class="f_group">
                            <div class="btn_wrap">
                                <button class="button cancel black">Cancel</button>
                                <button class="button ok">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pop_wrap" v-if="isDel">
                <div class="pop_mask"></div>
                <div class="pop_cont">
                    <h2 class="tit_pop tit_en txt_left tit_del">Delete Account</h2>
                    <div class="form_wrap">
                        <p class="txt_del">
                            중요한 내용이므로 주의 깊게 읽어주세요.
                        </p>
                        <ul class="list_del">
                            <li>
                                <p>사용하고 계신 아이디(usermail@email.com)는 계정이 삭제된 후 복구 및 재사용이 불가능합니다.</p>
                            </li>
                            <li>
                                <p>계정 삭제 후 모든 개인정보는 삭제됩니다. (법률에 따라 보관이 필요한 거래내역 등은 일정 기간 보존 후 완전히 삭제됩니다.)</p>
                            </li>
                            <li>
                                <p>보유하고 계신 지갑과 암호화폐는 별도의 사업자에 의해 관리되고 있기 때문에 탈퇴 후에도 유지됩니다.</p>
                            </li>
                            <li>
                                <p>계정 삭제 시점부터 회원님의 모든 활동에 대한 수익 정산은 중지됩니다.</p>
                            </li>
                            <li>
                                <p>업로드 한 동영상, 리뷰, 댓글 등은 자동으로 삭제되지 않습니다.</p>
                            </li>
                        </ul>

                        <div class="chk_agree">
                            <input id="chk_agree_01" type="checkbox">
                            <label for="chk_agree_01">본인은 모든 미결 거래로 인해 발생하는 청구 금액에 대해 전적으로 책임이 있음을 확인합니다.</label>
                        </div>
                        <div class="chk_agree">
                            <input id="chk_agree_02" type="checkbox">
                            <label for="chk_agree_02">본인은 계정 삭제 시점 부터 수익금을 지급받을 수 없다는 것에 동의합니다.</label>
                        </div>
                        <div class="f_group">
                            <div class="btn_wrap">
                                <button class="button cancel black">Cancel</button>
                                <button class="button ok">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>
<script>
	export default{
        data: function(){
            return{
                isAge : false, isDel: false
            }
        }
	}
</script>