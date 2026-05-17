package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAdviceEntityFunc func(client *AdviceSlipApi2SDK, entopts map[string]any) AdviceSlipApi2Entity

var NewSearchEntityFunc func(client *AdviceSlipApi2SDK, entopts map[string]any) AdviceSlipApi2Entity

