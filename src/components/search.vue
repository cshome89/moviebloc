<template>
	<section class="sub_cont container">
		<h2 class="tit_sub_cont">SEARCH</h2>

		<div class="search_wrap">
			<div class="inp_search">
				<input type="text" class="text text_large" />
				<a href="#" class="btn_search"></a>
			</div>
		</div>

		<h2 class="tit_sub_cont">ADVANCED SEARCH</h2>
		<div class="search_advanced_wrap">
			<ul class="list_chk">
				<li>
					<input id="chk_01" type="checkbox" name="chk_search" />
					<label for="chk_01">All Genre</label>
				</li>
				<li>
					<input id="chk_02" type="checkbox" name="chk_search" />
					<label for="chk_02">Drama</label>
				</li>
				<li>
					<input id="chk_03" type="checkbox" name="chk_search" />
					<label for="chk_03">Comedy</label>
				</li>
				<li>
					<input id="chk_04" type="checkbox" name="chk_search" />
					<label for="chk_04">Romance</label>
				</li>
				<li>
					<input id="chk_05" type="checkbox" name="chk_search" />
					<label for="chk_05">Horror</label>
				</li>
				<li>
					<input id="chk_06" type="checkbox" name="chk_search" />
					<label for="chk_06">SF</label>
				</li>

				<li>
					<input id="chk_07" type="checkbox" name="chk_search" />
					<label for="chk_07">Fantasy</label>
				</li>
				<li>
					<input id="chk_08" type="checkbox" name="chk_search" />
					<label for="chk_08">Action</label>
				</li>
				<li>
					<input id="chk_09" type="checkbox" name="chk_search" />
					<label for="chk_09">Thriller</label>
				</li>
				<li>
					<input id="chk_10" type="checkbox" name="chk_search" />
					<label for="chk_10">Animation</label>
				</li>
				<li>
					<input id="chk_11" type="checkbox" name="chk_search" />
					<label for="chk_11">Family</label>
				</li>
				<li>
					<input id="chk_12" type="checkbox" name="chk_search" />
					<label for="chk_12">Music</label>
				</li>

				<li>
					<input id="chk_13" type="checkbox" name="chk_search" />
					<label for="chk_13">Documentary</label>
				</li>
				<li>
					<input id="chk_14" type="checkbox" name="chk_search" />
					<label for="chk_14">Sports</label>
				</li>
				<li>
					<input id="chk_15" type="checkbox" name="chk_search" />
					<label for="chk_15">Classic</label>
				</li>
				<li>
					<input id="chk_16" type="checkbox" name="chk_search" />
					<label for="chk_16">History</label>
				</li>
			</ul>

			<div class="search_lang">
				<label>
					Audio
					<select class="sel_small sel_lightgray">
						<option value="">All Language</option>
					</select>
				</label>
				<label>
					Subtitle
					<select class="sel_small sel_lightgray">
						<option value="">All Language</option>
					</select>
				</label>
			</div>
		</div>

		<div class="btn_wrap">
			<button class="button ok large">Done</button>
		</div>
	</section>	
</template>

<script>
	
	export default {

	}

</script>