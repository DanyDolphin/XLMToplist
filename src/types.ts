export interface ContentData {
  height: number
  width: number
  externalUrl: string
  ctcommercial_offer_name: string
  ctcreative_name: string
  ctaffiliate_program: string
  ctaffiliate_link: string
  ctap_account: string
  ctproduct_name: string
  ctproduct_group: string
  ctproduct_type: string
  ctstart_date: string
  ctend_date: string
  ctoriginal_start_date: string
  ctbrand_name: string
  ctcurrency: string
  ctoffer_tc: string
  cttc_link: string
  ctavailable_only_for_mobile: boolean
  ctrestrictions: string
  ctmarketing_information: string
  ctoffer_type: string
  ctcash_out: boolean,
  ctbonus_type: string
  ctbonus_amount: string
  ctbonus_percentage: number,
  ctminimum_deposit: string
  ctminimum_stake: string
  ctlive_streaming_service: boolean,
  ctqualifying_bet: string
  ctpromo_code: string
  ctopt_in_required: boolean,
  ctwagering_requirements: string
  ctmax_free_bet: string
  ctmax_refund: string
  ctwhich_race: string
  ctmax_extra_places: string
  ctmin_place_terms: string
  ctmin_runners: string
  ctselected_races_only: boolean,
  ctmMinimum_bet_per_spin: string
  ctmaximum_bet_per_spin: string
  ctfree_spins_amount: string
  ctfree_spins_valid_for: string
  cttournament_tokens_amount: string
  ctmax_winnings: string
  ctbonus_cap: string
  ctminimum_bingo_tickets: string
  ctmaximum_bingo_tickets: string
  ctbingo_variants: string
  ctbingo_rooms: string
  ctminimum_lottery_tickets: string
  ctmaximum_lottery_tickets: string
  ctlotto_free_bets: string
  ctlotto_variants: string
  ctpoker_variant: string
  cttournaments_type: string
  ctoffer_brand_features: string
  cttournament_info: string
  ctminimum_odds: number
}

export interface ContentBody {
  ctBrandid: string
  ctBrandlogo: string
  ctBrandname: string
  ctBrandfreetextintrodescription: string
  ctSoftwareprovider: string
  ctProducttypes: string
  ctCustomerserviceoptions: string
  ctWebsitesecurity: string
  ctWithdrawaltime: string
  ctSafegamblingcontroltools: string
  ctMobileapps: string
  ctBrandspecialfeatures: string
  ctBrandrating: string
  ctUserbrandrating: string
  ctUsercomments: string
  ctBrandlicencename: string
  ctBrandsupportcontactemailandphone: string
  ctBrandkeysellingpoints: string
  ctDepositingmethods: string
  ctUniquesellingpoints: string
  ctCommercialoffername: string
  ctProductid: string
  ctProductname: string
  ctProductgroup: string
  ctProducttype: string
  ctChannel: string
}

export interface Content {
  body: ContentBody
  data: ContentData
}

export interface APIResponse {
  contents: Array<Content>
}