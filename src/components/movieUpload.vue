<template>
	<section class="sub_cont container">
            <div class="sub_top">
                <h2 class="tit_sub_cont">Upload a movie</h2>
            </div>
            <div class="upload_wrap">

                <div class="form_wrap">
                    <div class="sec_upload">
                    <a href="#" class="update_wrap empty">
                        <p class="txt_upload">영화 파일을 선택하거나 끌어서 놓으세요.</p>
                    </a>
                </div>
                    <div class="sec_upload">
                        <div class="sec_upload_item">
                            <div class="f_group">
                                <span class="f_tit">Title (English)<em>*</em></span>
                                <input type="text" class="text_lightgray" />
                            </div>
                            <div class="f_group">
                                <span class="f_tit">Synopsis (English) <em>*</em></span>
                                <div class="textarea_wrap">
                                    <span class="txt_cnt">226/300</span>
                                    <textarea class="text_lightgray"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="sec_upload_item">
                            <div class="f_group">
                                <span class="f_tit">Add language to title & synopsis</span>
                                <div class="lang_wrap">
                                    <select class="sel_lightgray sel_large">
                                        <option value="">Language</option>
                                    </select>
                                    <button class="button ok">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sec_upload">
                        <div class="sec_upload_item">
                            <div class="layout">
                                <div class="layout_col col_2">
                                    <div class="f_group">
                                        <span class="f_tit">상영시간 (분) <em>*</em></span>
                                        <input type="text" class="text_lightgray" value="60"/>
                                    </div>
                                </div>
                                <div class="layout_col col_2">
                                    <div class="f_group">
                                        <span class="f_tit">오디오 언어<em>*</em></span>
                                        <select class="sel_lightgray sel_large sel_max">
                                            <option value="">Language</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sec_upload_item">
                            <div class="f_group">
                                <span class="f_tit">예고편</span>
                                <div class="update_wrap empty">
                                    <p class="txt_upload">예고편 파일을 선택하거나 끌어서 놓으세요.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sec_upload">
                        <div class="sec_upload_item">
                            <div class="f_group">
                                <span class="f_tit">예고편 <em>*</em></span>
                                <div class="list_img_wrap">
                                    <span class="txt_cnt">0/4</span>
                                    <ul class="list_img">
                                        <li>
                                            <div class="img"></div>
                                            <a href="#" class="btn btn_text btn_small btn_lightgray btn_img_upload">업로드</a>
                                        </li>
                                        <li>
                                            <div class="img"></div>
                                            <a href="#" class="btn btn_text btn_small btn_lightgray btn_img_upload">업로드</a>
                                        </li>
                                        <li>
                                            <div class="img"></div>
                                            <a href="#" class="btn btn_text btn_small btn_lightgray btn_img_upload">업로드</a>
                                        </li>
                                        <li>
                                            <div class="img"></div>
                                            <a href="#" class="btn btn_text btn_small btn_lightgray btn_img_upload">업로드</a>
                                        </li>
                                    </ul>
                                    <p class="txt_help">권장 사이즈 : 1920x1080px</p>
                                </div>
                            </div>
                        </div>
                        <div class="sec_upload_item">
                            <div class="f_group">
                                <span class="f_tit">자막 업로드</span>
                                <div class="caption_wrap">
                                    <select class="sel_lightgray sel_large">
                                        <option value="">Language</option>
                                    </select>
                                    <a href="#" class="btn btn_video btn_large btn_text_add">자막 파일</a>
                                    <button class="button ok">업로드</button>
                                </div>
                                <p class="txt_help">자막은 UTF-8 인코딩의 SRT 또는 VTT만 업로드 가능합니다. </p>
                            </div>
                        </div>
                    </div>

                    <div class="sec_upload">
                        <div class="sec_upload_item">
                            <div class="f_group">
                                <span class="f_tit">Staff & Director’s Comment</span>
                                <div class="textarea_wrap">
                                    <span class="txt_cnt">478/1000</span>
                                    <textarea class="text_lightgray" style="height:140px;">Director: Lucas Hrubizna
Producer: Joaquin Cardoner
Cinematographer: Blake Davey
Editor: Lucas Hrubizna
Visual Effects: Lucas Hrubizna
Colourist: Lucas Hrubizna
1st Assistant Director: Brock Newman
Production Designer: Charlie Hannah
1st Assistant Camera: Farhad Ghaderi
2nd Assistant Camera: Michael Reimer
Special Effects Supervisor: Keifer Dallison
1st Assistant Special Effects: Hayden Dallison
Makeup Artist: Kristen Foote
We acknowledge the support of the Canada Council for the Arts.</textarea>
                                </div>
                            </div>
                        </div>
                        <div class="sec_upload_item">
                            <div class="f_group">
                                <span class="f_tit">상영할 국가 선택 <em>*</em></span>
                                <a href="#" class="btn btn_video btn_large full btn_add"></a>
                            </div>
                        </div>
                    </div>

                    <div class="sec_upload">
                        <div class="sec_upload_item">
                            <div class="layout">
                                <div class="layout_col col_2">
                                    <div class="f_group">
                                        <span class="f_tit">결제방법 <em>*</em></span>
                                        <select class="sel_lightgray sel_large sel_max">
                                            <option value="">선택</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="layout_col col_2">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sec_upload">
                        <div class="sec_upload_item">
                            <div class="f_group">
                                <span class="f_tit">상영 약관 동의<em>*</em></span>
                                <div class="textarea_wrap">
                                    <div class="tool_bar">
                                        <a href="#" class="btn_open">새 창으로 보기</a>
                                    </div>
                                    <textarea class="text_lightgray" style="height:300px;" readonly>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sapien justo. Mauris augue augue, interdum vitae congue at, aliquet ac ligula. Morbi elit metus, imperdiet vel pulvinar quis, eleifend in nunc. Aliquam erat volutpat. Aenean a libero in ipsum venenatis vestibulum. Donec dui leo, congue tincidunt luctus vestibulum, sagittis nec elit. Proin dapibus, nisl a posuere vulputate, metus mauris hendrerit nulla, et placerat nisi enim sit amet neque. Morbi laoreet erat nec elit sodales lacinia. Pellentesque mauris arcu, suscipit quis porta quis, iaculis sed sapien. Phasellus eleifend malesuada metus sed volutpat. Aliquam feugiat, massa vel aliquam blandit, nisl tellus commodo velit, nec fermentum arcu erat ut dolor. Duis eleifend convallis libero eu blandit.

Etiam vitae libero ut sem sodales malesuada eu eu ligula. Vivamus at suscipit massa. Sed nulla augue, porttitor vitae suscipit in, euismod malesuada risus.
</textarea>
                                    <div class="chk_agree">
                                        <input id="chk_agree_01" type="checkbox" />
                                        <label for="chk_agree_01">약관에 동의합니다.</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="sec_upload_item">
                            <div class="f_group">
                                <span class="f_tit">계약에 동의합니다.<em>*</em></span>
                                <div class="textarea_wrap">
                                    <div class="tool_bar">
                                        <a href="#" class="btn_open">새 창으로 보기</a>
                                    </div>
                                    <textarea class="text_lightgray" style="height:300px;" readonly>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet sapien justo. Mauris augue augue, interdum vitae congue at, aliquet ac ligula. Morbi elit metus, imperdiet vel pulvinar quis, eleifend in nunc. Aliquam erat volutpat. Aenean a libero in ipsum venenatis vestibulum. Donec dui leo, congue tincidunt luctus vestibulum, sagittis nec elit. Proin dapibus, nisl a posuere vulputate, metus mauris hendrerit nulla, et placerat nisi enim sit amet neque. Morbi laoreet erat nec elit sodales lacinia. Pellentesque mauris arcu, suscipit quis porta quis, iaculis sed sapien. Phasellus eleifend malesuada metus sed volutpat. Aliquam feugiat, massa vel aliquam blandit, nisl tellus commodo velit, nec fermentum arcu erat ut dolor. Duis eleifend convallis libero eu blandit.

Etiam vitae libero ut sem sodales malesuada eu eu ligula. Vivamus at suscipit massa. Sed nulla augue, porttitor vitae suscipit in, euismod malesuada risus.
</textarea>
                                    <div class="chk_agree">
                                        <input id="chk_agree_02" type="checkbox" />
                                        <label for="chk_agree_02">계약에 동의합니다.</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="btn_form">
                        <div class="left">
                            <a href="#" class="button cancel">임시 저장</a>
                            <a href="#" class="button cancel">미리보기</a>
                        </div>
                        <div class="right">
                            <a href="#" class="button ok">상영 시작하기</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
</template>
<script>
	export default{
		
	}
</script>