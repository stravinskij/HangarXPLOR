
var HangarXPLOR = HangarXPLOR || {};

/* Overrides for the ship matrix */
/*******************************
 * key:         The name as expected from ship-matrix (if different)
 * name:        The name as expected from hangar
 * displayName: The name as displayed by HangarXPLOR
 * thumbnail:   The thumbnail displayed by HangarXPLOR
 * 
 * url:         The url of the details page
 * focus:       The focus of the ship
 */
HangarXPLOR._ships = {
  'X1 Base': {
    name: 'X1'
  },
  'F7A Hornet': {
    thumbnail: ''
  },
  'F7C Hornet': {
    name: 'Hornet F7C',
    displayName: 'F7C Hornet',
  },
  'F8A Lightning': {
    focus: 'Heavy Fighter',
    url: 'https://robertsspaceindustries.com/galactapedia/article/bZwQ7r6nkE-f8a-lightning',
    // thumbnail: 'https://cig-galactapedia-prod.s3.amazonaws.com/upload/07841eb5-c02a-49b6-a422-2fc5449f8580'
  },
  'F8C Lightning Civilian': {
    displayName: 'F8C Lightning: Civilian',
    // thumbnail: '/media/6yu51ic3y27b6r/heap_infobox/F8C.png'
  },
  'F8C Lightning Executive Edition': {
    displayName: 'F8C Lightning: Executive Edition',
    // thumbnail: '/media/ldeqyuto9lb46r/heap_infobox/F8C-Executive.png'
  },
  'A2 Hercules': {
    name: 'Hercules Starlifter A2'
  },
  'C2 Hercules': {
    name: 'Hercules Starlifter C2'
  },
  'M2 Hercules': {
    name: 'Hercules Starlifter M2'
  },
  '600i Explorer': {
    name: '600i Exploration Module'
  },
  '600i Touring': {
    name: '600i Touring  Module'
  },
  'Argo Mole Talus Edition': {
    name: 'Argo Mole - Talus Edition',
    displayName: 'Mole: Talus Edition'
  },
  'Argo Mole Carbon Edition': {
    name: 'Argo Mole - Carbon Edition',
    displayName: 'Mole: Carbon Edition'
  },
  'Scythe': {
    name: 'Captured Vanduul Scythe',
    displayName: 'Scythe'
  }
};


HangarXPLOR._ships2 = [
  { 'name': 'Origin 100 Series Pack', 'thumbnail': '/media/jhifpuskfsm4gr/heap_infobox/Origin_100_All_100s_LineUP_Front_sm-Min.jpg' },
  { 'name': '100i', 'thumbnail': '/media/bapnpk9usqxxhr/heap_infobox/100i.jpg' },
  { 'name': '125a', 'thumbnail': '/media/vkuyeedcipouyr/heap_infobox/125a.jpg' },
  { 'name': '135c', 'thumbnail': '/media/j6gp10aglbb0or/heap_infobox/135c.jpg' },
  { 'name': '300i', 'thumbnail': '/media/ep375pda2jer7r/heap_infobox/300i_storefront_visual.jpg' },
  { 'name': '315p', 'thumbnail': '/media/o34z1cyxt1um8r/heap_infobox/315p_storefront_visual.jpg' },
  { 'name': '325a', 'thumbnail': '/media/gdol1g9fswvjcr/heap_infobox/325a_storefront_visual.jpg' },
  { 'name': '350r', 'thumbnail': '/media/9k0k3orww22zer/heap_infobox/350r.jpg' },
  { 'name': '600i Executive', 'thumbnail': '/media/ew63gkfbd7ki2r/heap_infobox/600i_02.jpg' },
  { 'name': '600i Exploration', 'thumbnail': '/media/8sqwytgh6ij03r/heap_infobox/600i-Exploration.jpg' },
  { 'name': '600i Touring', 'thumbnail': '/media/z642zdp6d3mkzr/heap_infobox/600i-Touring.jpg' },
  { 'name': '600i', 'thumbnail': '/media/8sqwytgh6ij03r/heap_infobox/600i-Exploration.jpg' },
  { 'name': '85X', 'thumbnail': '/media/4vht65hve2o1cr/heap_infobox/85_X_city_shot.jpg' },
  { 'name': '890 JUMP', 'thumbnail': '/media/aokcb6ay0i0jpr/heap_infobox/890_beautyShot-Concept_V01High_NF_140709.jpg' },
  { 'name': 'Apollo Triage', 'thumbnail': '/media/rb5f1w3fwj91qr/heap_infobox/RSI_Apollo_landed_topview_03_AL_Pj01-Squashed.jpg' },
  { 'name': 'Apollo', 'thumbnail': '/media/qtbgmjijc8g1vr/heap_infobox/RSI_Apollo_Promo_Recovery_Drone_AL01_PJ01-Squashed.jpg' },
  { 'name': 'Ares Inferno', 'thumbnail': 'https://media.robertsspaceindustries.com/jkw5h6088fryi/heap_infobox.jpg' },
  { 'name': 'Ares Ion', 'thumbnail': 'https://media.robertsspaceindustries.com/711aanrxslfo9/heap_infobox.jpg' },
  { 'name': 'Aurora CL', 'thumbnail': '/media/fh1gtu93mndsur/heap_infobox/Rsi_aurora_cl_storefront_visual.jpg' },
  { 'name': 'Aurora ES', 'thumbnail': '/media/9u8061zhf29fir/heap_infobox/Rsi_aurora_es_storefront_visual.jpg' },
  { 'name': 'Aurora LN', 'thumbnail': '/media/ljgowkr9tdwetr/heap_infobox/Rsi_aurora_ln_storefront_visual.jpg' },
  { 'name': 'Aurora LX', 'thumbnail': '/media/xfq27owiysn6ar/heap_infobox/Aurora-LX_Ortho.jpg' },
  { 'name': 'Aurora MR', 'thumbnail': '/media/ohbfgn1ebcsnar/heap_infobox/Rsi_aurora_mr_storefront_visual.jpg' },
  { 'name': 'Aurora', 'thumbnail': '/media/9u8061zhf29fir/heap_infobox/Rsi_aurora_es_storefront_visual.jpg' },
  { 'name': 'Avenger Stalker', 'thumbnail': '/media/3dx8jqsd79dmpr/heap_infobox/Avenger_storefront_visualjpg.jpg' },
  { 'name': 'Avenger Titan Renegade', 'thumbnail': '/media/cg2gcecohj7s6r/heap_infobox/Avenger_cargo_right.jpg' },
  { 'name': 'Avenger Titan', 'thumbnail': '/media/uab891sfv8ozwr/heap_infobox/Titan_01-Squashed.jpg' },
  { 'name': 'Avenger Warlock', 'thumbnail': '/media/qcv2n7ms9qwj8r/heap_infobox/Avenger_EMP_02.jpg' },
  { 'name': 'Avenger', 'thumbnail': 'https://media.robertsspaceindustries.com/9tfhza1twrczn/heap_infobox.jpg' },
  { 'name': 'Ballista Dunestalker', 'thumbnail': '/media/rjxw89rs3sk5wr/heap_infobox/Ballista_Dunestalker-Min.jpg' },
  { 'name': 'Ballista Snowblind', 'thumbnail': '/media/a5nzp9tgvq2i5r/heap_infobox/Ballista_Snowblind-Min.jpg' },
  { 'name': 'Ballista', 'thumbnail': 'https://media.robertsspaceindustries.com/e6jcsnshfbfy2/heap_infobox.jpg' },
  { 'name': 'Buccaneer', 'thumbnail': '/media/pz2oqi319v0ptr/heap_infobox/Buccaneer_Landed_02.jpg' },
  { 'name': 'Blade', 'thumbnail': '/media/nlamsjvlrdywnr/heap_infobox/Blade-Top-Squashed.jpg' },
  { 'name': 'Carrack', 'thumbnail': '/media/u248nf7opb5bhr/heap_infobox/Carrack_Landed_Final_Gurmukh.png' },
  { 'name': 'Caterpillar Pirate Edition', 'thumbnail': '/media/56cjes33yzdj6r/heap_infobox/Pirate_05.jpg' },
  { 'name': 'Caterpillar', 'thumbnail': '/media/t6jowqxe2u8jxr/heap_infobox/Ext-Front-V01.jpg' },
  { 'name': 'Constellation Andromeda', 'thumbnail': '/media/vzyhde6cjgsn7r/heap_infobox/Andromeda_Storefront.jpg' },
  { 'name': 'Constellation Aquila', 'thumbnail': '/media/u0pbc9k058nuhr/heap_infobox/Aquila_Storefront.jpg' },
  { 'name': 'Constellation Phoenix Emerald', 'thumbnail': '/media/kkakjxny421xfr/heap_infobox/Connie_Emerald.jpg' },
  { 'name': 'Constellation Phoenix', 'thumbnail': 'https://media.robertsspaceindustries.com/mibl3d305r0q6/heap_infobox.png' },
  { 'name': 'Constellation Taurus', 'thumbnail': '/media/3vj4o4l5uggk7r/heap_infobox/Taurus-Storefront.jpg' },
  { 'name': 'Constellation', 'thumbnail': '/media/3vj4o4l5uggk7r/heap_infobox/Taurus-Storefront.jpg' },
  { 'name': 'Crucible', 'thumbnail': '/media/p1ssz5xc0ev53r/heap_infobox/AnvilcrucibleLANDED.jpg' },
  { 'name': 'Cutlass Black', 'thumbnail': '/media/7tcxllnna6a9hr/heap_infobox/Drake_cutlass_storefront_visual.jpg' },
  { 'name': 'Cutlass Blue', 'thumbnail': '/media/8d5ywktt23231r/heap_infobox/Blue-WR-Orth_000000.jpg' },
  { 'name': 'Cutlass Red', 'thumbnail': '/media/anznazc3gf5oar/heap_infobox/Slide_Cut-Red.jpg' },
  { 'name': 'Cutlass', 'thumbnail': '/media/7tcxllnna6a9hr/heap_infobox/Drake_cutlass_storefront_visual.jpg' },
  { 'name': 'Cyclone-AA', 'thumbnail': '/media/wk9v710a3544zr/heap_infobox/03_AA_Cyclone-1.jpg' },
  { 'name': 'Cyclone-RC', 'thumbnail': '/media/jq8ph9r2m9dtbr/heap_infobox/05_RC_Cyclone-1.jpg' },
  { 'name': 'Cyclone-RN', 'thumbnail': '/media/uwsxls7k000byr/heap_infobox/06_RN_Cyclone.jpg' },
  { 'name': 'Cyclone-TR', 'thumbnail': '/media/bt0t220cao82ur/heap_infobox/00_TR_Cyclone.jpg' },
  // { 'name': 'Cyclone', 'thumbnail': '/media/bt0t220cao82ur/heap_infobox/00_TR_Cyclone.jpg' },
  { 'name': 'Defender', 'thumbnail': '/media/hh9wc0m0r6y5nr/heap_infobox/20170407c-reduced.jpg' },
  { 'name': 'Eclipse', 'thumbnail': '/media/uqceivqlombzor/heap_infobox/Aegis-Eclipse-L4-Piece-2-Hangar-Presentation-007.jpg' },
  { 'name': 'Endeavor', 'thumbnail': '/media/vh2jbjaom7ys4r/heap_infobox/CO_Beauty_BioDomes.jpg' },
  { 'name': 'F7C-M Super Hornet', 'thumbnail': '/media/4otqgybm0y38ur/heap_infobox/F7c-M_super-Hornet_storefront_visual.jpg' },
  { 'name': 'F7C-R Hornet Tracker', 'thumbnail': '/media/5f5hxp2dp3b69r/heap_infobox/F7c-R_hornet-Tracker_storefront_visual.jpg' },
  { 'name': 'F7C-S Hornet Ghost', 'thumbnail': '/media/d7l12zt956s62r/heap_infobox/F7cs_hornet_ghost_storefront_visual.jpg' },
  { 'name': 'F7C Hornet Wildfire', 'thumbnail': '/media/0ioeh7g90gnqsr/heap_infobox/Wildfire_render1.jpg' },
  { 'name': 'F7C Hornet', 'thumbnail': '/media/m6e374a9zb7dlr/heap_infobox/F7c_hornet_storefront_visual.jpg' },
  { 'name': 'Freelancer DUR', 'thumbnail': '/media/gui7c4ac9u4v3r/heap_infobox/Freelancer_dur_storefront_visual.jpg' },
  { 'name': 'Freelancer MAX', 'thumbnail': '/media/pd2zoaytunmrkr/heap_infobox/Freelancer_max_storefront_visual.jpg' },
  { 'name': 'Freelancer MIS', 'thumbnail': '/media/yie4k1qvzqqr0r/heap_infobox/Freelancer_mis_storefront_visual.jpg' },
  { 'name': 'Freelancer', 'thumbnail': '/media/ts39qbhy6x38pr/heap_infobox/Freelancer_storefront_visual.jpg' },
  { 'name': 'G12A', 'thumbnail': 'https://media.robertsspaceindustries.com/pahu0o7jdshco/heap_infobox.jpg' },
  { 'name': 'G12R', 'thumbnail': 'https://media.robertsspaceindustries.com/bml1upk14o5re/heap_infobox.jpg' },
  { 'name': 'G12', 'thumbnail': 'https://media.robertsspaceindustries.com/s7f45fxzm59py/heap_infobox.jpg' },
  { 'name': 'Genesis', 'thumbnail': '/media/iqk7vt4xay0zfr/heap_infobox/Starliner_action1_runwaycompFlat.jpg' },
  { 'name': 'Gladiator', 'thumbnail': '/media/qjmsm4fedkty7r/heap_infobox/Gladiator.png' },
  { 'name': 'Gladius Pirate Edition', 'thumbnail': '/media/mpszlemby5r43r/heap_infobox/Gladius_variant_sale_img.jpg' },
  { 'name': 'Gladius Valiant', 'thumbnail': '/media/mpszlemby5r43r/heap_infobox/Gladius_variant_sale_img.jpg' },
  { 'name': 'Gladius', 'thumbnail': 'https://media.robertsspaceindustries.com/xxdvidtr1ze6b/heap_infobox.jpg' },
  { 'name': 'Glaive', 'thumbnail': '/media/i8jxt206icfbar/heap_infobox/Glaive2comp0059comp2.jpg' },
  { 'name': 'Hammerhead', 'thumbnail': '/media/o3629jnxrq3bmr/heap_infobox/Hammerhead_Missile_Fire_2.jpg' },
  { 'name': 'Hawk', 'thumbnail': '/media/4diiopxx6gyr5r/heap_infobox/Ah-Parking-Scene-02.jpg' },
  { 'name': 'Herald', 'thumbnail': '/media/rq2gv7b4b3id0r/heap_infobox/Herald-1.jpg' },
  { 'name': 'Hercules Starlifter A2', 'thumbnail': '/media/kct1e9vkx4ld6r/heap_infobox/CRUS_Starlifter_Promo_Gunship_Bombing_MO02-Squashed.jpg' },
  { 'name': 'Hercules Starlifter C2', 'thumbnail': '/media/7bdt759toqnvhr/heap_infobox/CRUS_Starlifter_Promo_Basic_Landed_MO01-Squashed.jpg' },
  { 'name': 'Hercules Starlifter M2', 'thumbnail': '/media/p077b9nm14i11r/heap_infobox/CRUS_Starlifter_Promo_Military_Flares_MO01-Squashed.jpg' },
  { 'name': 'Hornet F7C', 'thumbnail': '/media/m6e374a9zb7dlr/heap_infobox/F7c_hornet_storefront_visual.jpg' },
  { 'name': 'Hull A', 'thumbnail': '/media/tpw5r365mowmar/heap_infobox/Hull_A_Final.jpg' },
  { 'name': 'Hull B', 'thumbnail': '/media/xg8d8kyo0bjsmr/heap_infobox/HullB_landedcompv3b.jpg' },
  { 'name': 'Hull C', 'thumbnail': '/media/w54u21vkhci5vr/heap_infobox/Hull_C_Final.jpg' },
  { 'name': 'Hull D', 'thumbnail': '/media/wox7k753a2pn6r/heap_infobox/Hull_D_Blueprint.jpg' },
  { 'name': 'Hull E', 'thumbnail': '/media/xyt1qu08sjmy3r/heap_infobox/Hull_E_3_compflat.jpg' },
  { 'name': 'Hurricane', 'thumbnail': '/media/vnqcqb3nj47rnr/heap_infobox/Hangar2-Copy.jpg' },
  { 'name': 'Idris-M', 'thumbnail': '/media/rfjjekm57en5jr/heap_infobox/IDRISdownfrontquarter_copy.jpg' },
  { 'name': 'Idris-P', 'thumbnail': '/media/okj4yh84jq9f2r/heap_infobox/IDRISuprearquarter-Copy.jpg' }, // /media/rfjjekm57en5jr/heap_infobox/IDRISdownfrontquarter_copy.jpg' },
  { 'name': 'Javelin-Class Destroyer', 'thumbnail': '/media/nzqi87nkarvupr/heap_infobox/Javelin-Sale.jpg' },
  { 'name': 'Javelin', 'thumbnail': '/media/nzqi87nkarvupr/heap_infobox/Javelin-Sale.jpg' },
  { 'name': 'Kraken Privateer', 'thumbnail': 'https://media.robertsspaceindustries.com/vz94xqyun7q6q/heap_infobox.jpg' },
  { 'name': 'Kraken', 'thumbnail': 'https://media.robertsspaceindustries.com/vz94xqyun7q6q/heap_infobox.jpg' },
  { 'name': 'Khartu-Al', 'thumbnail': '/media/zzycyqkpn9vu8r/heap_infobox/Image_landed.jpg' },
  { 'name': 'F8C Lightning Civilian', 'thumbnail': '/media/6yu51ic3y27b6r/heap_infobox/F8C.png' },
  { 'name': 'F8C Lightning Executive', 'thumbnail': '/media/ldeqyuto9lb46r/heap_infobox/F8C-Executive.png' },
  { 'name': 'M50', 'thumbnail': '/media/q1jk89gqz2231r/heap_infobox/Jumppoint-Final-Crop.jpg' },
  { 'name': 'Mantis', 'thumbnail': 'https://media.robertsspaceindustries.com/y3abkhxhriuvc/heap_infobox.jpg' },
  { 'name': 'Merchantman', 'thumbnail': '/media/d8ktckex1ucmrr/heap_infobox/Banu3.jpg' }, // /media/63lxivb7mi3vzr/heap_infobox/Banu_merchantman_side_Version_A.jpg
  { 'name': 'Mercury', 'thumbnail': '/media/irj2hkopf9043r/heap_infobox/Crusader3-Min.jpeg' },
  { 'name': 'MPUV Cargo', 'thumbnail': '/media/czio0bw0x1v6cr/heap_infobox/BatCave_4k_v02right2.jpg' },
  { 'name': 'MPUV Personnel', 'thumbnail': '/media/fgi7cen4bdvzkr/heap_infobox/Landing_v01.jpg' },
  { 'name': 'Mustang Alpha Vindicator', 'thumbnail': 'https://media.robertsspaceindustries.com/iohmvf24h4rsz/heap_infobox.png' },
  { 'name': 'Mustang Alpha', 'thumbnail': '/media/ssh2spko70pz6r/heap_infobox/Alpha-Front.jpg' },
  { 'name': 'Mustang Beta', 'thumbnail': '/media/4ws8rrspe10exr/heap_infobox/5675676578.jpg' },
  { 'name': 'Mustang Delta', 'thumbnail': '/media/dtqy8jpl0f9cbr/heap_infobox/Delta-Front.jpg' },
  { 'name': 'Mustang Gamma', 'thumbnail': '/media/yu4cuzh90oz54r/heap_infobox/Gamma-Front.jpg' },
  { 'name': 'Mustang Omega', 'thumbnail': '/media/gmru9y7ynd1bbr/heap_infobox/Omega-Front.jpg' },
  { 'name': 'Nautilus Solstice', 'thumbnail': '/media/odq6eby24dbp1r/heap_infobox/AEGIS_Nautilus_Promo_PaintScheme_Concierge_PJ01-Min.png' },
  { 'name': 'Nautilus', 'thumbnail': 'https://media.robertsspaceindustries.com/41iuhrvh5p2zb/heap_infobox.jpg' },
  { 'name': 'Nomad', 'thumbnail': 'https://media.robertsspaceindustries.com/fcqc4k2uwgpbr/heap_infobox.jpg' },
  { 'name': 'Nova Tank', 'thumbnail': '/media/ul5zp2zllebm2r/heap_infobox/TMBL_HeavyTank_ShotG_PJ03-Squashed.jpg' },
  { 'name': 'Nox Kue', 'thumbnail': '/media/z676k3irx41iur/heap_infobox/NoxKue-Left.jpg' },
  { 'name': 'Nox', 'thumbnail': '/media/3y2kl543u5n4qr/heap_infobox/Nox-Left.jpg' },
  { 'name': 'Orion', 'thumbnail': '/media/hfpnkupg7gr6er/heap_infobox/RSI_Orion_Situ1b_150219_GH.jpg' },
  { 'name': 'P-52 Merlin', 'thumbnail': '/media/a9231ysz5cnvor/heap_infobox/Top.jpg' },
  { 'name': 'P-72 Archimedes Emerald', 'thumbnail': 'https://media.robertsspaceindustries.com/wonpc3ujtlg9k/heap_infobox.jpg' },
  { 'name': 'P-72 Archimedes', 'thumbnail': '/media/xqgbgw3x6o54ir/heap_infobox/Archimedes_Front_01.jpg' },
  { 'name': 'Perseus', 'thumbnail': 'https://media.robertsspaceindustries.com/6aoqdgboy4hwo/heap_infobox.jpg' },
  { 'name': 'Pioneer', 'thumbnail': '/media/of1es6gu4pa4ir/heap_infobox/Alderin-Landed-Snow-Shot.jpg' },
  { 'name': 'Pisces Expedition', 'thumbnail': 'https://media.robertsspaceindustries.com/kj7oh12zn2f1l/heap_infobox.jpg' },
  { 'name': 'Pisces', 'thumbnail': 'https://media.robertsspaceindustries.com/9y6uxd82fw0ne/heap_infobox.jpg' },
  { 'name': 'Polaris', 'thumbnail': '/media/jv2ayxfguiu57r/heap_infobox/Polaris-Landed.jpg' },
  { 'name': 'Prospector', 'thumbnail': '/media/smfwnj15y4gq5r/heap_infobox/MISC-Mining-Vehicle-PIECE-2-V19.jpg' },
  { 'name': 'Prowler', 'thumbnail': '/media/3j9cau4jygwier/heap_infobox/Esperia_Prowler_SHOT_01b.jpg' },
  { 'name': 'Razor EX', 'thumbnail': '/media/dnlz9p3jx9ll7r/heap_infobox/2-Razor-Flight-Squashed.jpg' },
  { 'name': 'Razor LX', 'thumbnail': '/media/q9uluuv7z01y7r/heap_infobox/3-LX-City-Flight-Squashed.jpg' },
  { 'name': 'Razor', 'thumbnail': '/media/18235dq8cydhur/heap_infobox/Misc-Razer-Murray-Ringz-Paint-V5.jpg' }, // '/media/ignbfgsun0k0hr/heap_infobox/Misc-Razer-Pit-Crew-V4.jpg' },
  { 'name': 'Reclaimer', 'thumbnail': '/media/627hob4lwqt3xr/heap_infobox/Image002-1.jpg' },
  { 'name': 'Redeemer', 'thumbnail': '/media/t0opqw0tauo45r/heap_infobox/Red1.jpg' },
  { 'name': 'Reliant Kore - Mini Hauler', 'thumbnail': '/media/rh3sstehu678br/heap_infobox/Reliant_Kore_01.jpg' },
  { 'name': 'Reliant Tana - Skirmisher', 'thumbnail': '/media/xr1qiks5uct2rr/heap_infobox/Skirmisher_InSitu_AttackChase_Final_Hobbins.jpeg' },
  { 'name': 'Reliant Sen - Researcher', 'thumbnail': '/media/78ql1skg8yjavr/heap_infobox/Researcher_Insitu_ExploringGasGiantsMoons_Final_Hobbins.jpeg' },
  { 'name': 'Reliant Mako - News Van', 'thumbnail': '/media/uql843xerchrrr/heap_infobox/NewsVanTracker_Insitu_RaceCapture_Final_Hobbins.jpeg' },
  { 'name': 'Reliant', 'thumbnail': '/media/jjs1n85qx4u7br/heap_infobox/Reliant_LandingInsitu_Final_Hobbins.png' },
  { 'name': 'Retaliator Base', 'thumbnail': '/media/bp86xpkhi47etr/heap_infobox/Retaliator_engine_shot_a.jpg' },
  { 'name': 'Retaliator Bomber', 'thumbnail': '/media/kz6mu0tt0u06er/heap_infobox/Retaliator-Ortho_v2.jpg' },
  { 'name': 'Retaliator', 'thumbnail': '/media/kz6mu0tt0u06er/heap_infobox/Retaliator-Ortho_v2.jpg' },
  { 'name': 'ROC', 'thumbnail': 'https://media.robertsspaceindustries.com/u39m0vmntr3pk/heap_infobox.jpg' },
  { 'name': 'Sabre Comet', 'thumbnail': '/media/8pmglyd0scvhar/heap_infobox/Sabre_variant_sale_img.jpg' },
  { 'name': 'Sabre Raven', 'thumbnail': '/media/l2eiovh45ypuyr/heap_infobox/RavenTop_Masked.jpg' },
  { 'name': 'Sabre', 'thumbnail': '/media/wnqvrpoomrpp6r/heap_infobox/Concept_citcon2015_5.jpg' },
  { 'name': 'Scythe', 'thumbnail': '/media/mlnz0gdyefdmyr/heap_infobox/Vanduul-Scythe_flight_visual.jpg' },
  { 'name': 'SRV', 'thumbnail': 'https://media.robertsspaceindustries.com/aojn1qvitpt1s/heap_infobox.jpg' },
  { 'name': 'Starfarer Gemini', 'thumbnail': '/media/4pgpl7n71hijzr/heap_infobox/Gemini2338.jpg' },
  { 'name': 'Starfarer', 'thumbnail': '/media/k4f44vqnex0m1r/heap_infobox/SF-Chris-O-2.jpg' },
  { 'name': 'Talon Shrike', 'thumbnail': 'https://media.robertsspaceindustries.com/h2kfgwyfc656i/heap_infobox.jpg' },
  { 'name': 'Talon', 'thumbnail': 'https://media.robertsspaceindustries.com/5aou1wl6cnihj/heap_infobox.jpg' },
  { 'name': 'Terrapin', 'thumbnail': '/media/lbhilnq9i8t2mr/heap_infobox/Anvil_Terrapin_Piece_03_Surveilance_v3.jpg' },
  { 'name': 'Valkyrie Liberator', 'thumbnail': '/media/l87lynolh4pxyr/heap_infobox/128934g7tt.jpg' },
  { 'name': 'Valkyrie', 'thumbnail': '/media/2fsa0bb3f4e19r/heap_infobox/Valkyrie-Blue-Formation.png' },
  { 'name': 'Vanduul Blade', 'thumbnail': '/media/d63g0lqsljoyfr/heap_infobox/01.jpg' },
  { 'name': 'Vanguard Hoplite', 'thumbnail': '/media/zwyyyap3aa7wwr/heap_infobox/Aegis_Vanguard_Hoplite_01.jpg' },
  { 'name': 'Vanguard Harbinger', 'thumbnail': '/media/c5vioobscp9vkr/heap_infobox/02.jpg' },
  { 'name': 'Vanguard Sentinel', 'thumbnail': '/media/qqmzhgb7ra29xr/heap_infobox/03.jpg' },
  { 'name': 'Vanguard Warden', 'thumbnail': '/media/4bnuwyj849f3hr/heap_infobox/Vanguard_34_final_Bachiller_02.png' },
  { 'name': 'Vanguard', 'thumbnail': '/media/4bnuwyj849f3hr/heap_infobox/Vanguard_34_final_Bachiller_02.png' },
  { 'name': 'Vulcan', 'thumbnail': '/media/shj3bowjd33umr/heap_infobox/AEGS_Vulcan_ToTheRescueFinal_001b.jpg' },
  { 'name': 'Vulture', 'thumbnail': '/media/me9lsb0sr41kzr/heap_infobox/Vulture_mechanic.jpg' },
  { 'name': 'Xi\'an Scout', 'thumbnail': '/media/zzycyqkpn9vu8r/heap_infobox/Image_landed.jpg' },
  { 'name': 'X1 Baseline Scarlet Edition', 'thumbnail': '/media/3yoh7gun89r8ir/heap_infobox/X1_red_lmt_edition_skin.png' },
  { 'name': 'X1 Velocity', 'thumbnail': '/media/db18k7yq7s9x0r/heap_infobox/X1_racing_skin.png' },
  { 'name': 'X1 Force', 'thumbnail': '/media/y5wp16jpen045r/heap_infobox/X1_stealth_skin.png' },
  { 'name': 'X1 Base', 'thumbnail': '/media/ktxtqr3rikt88r/heap_infobox/X1_base_white.png' },
]
