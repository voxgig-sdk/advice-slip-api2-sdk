package voxgigadviceslipapi2sdk

import (
	"github.com/voxgig-sdk/advice-slip-api2-sdk/go/core"
	"github.com/voxgig-sdk/advice-slip-api2-sdk/go/entity"
	"github.com/voxgig-sdk/advice-slip-api2-sdk/go/feature"
	_ "github.com/voxgig-sdk/advice-slip-api2-sdk/go/utility"
)

// Type aliases preserve external API.
type AdviceSlipApi2SDK = core.AdviceSlipApi2SDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type AdviceSlipApi2Entity = core.AdviceSlipApi2Entity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type AdviceSlipApi2Error = core.AdviceSlipApi2Error

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAdviceEntityFunc = func(client *core.AdviceSlipApi2SDK, entopts map[string]any) core.AdviceSlipApi2Entity {
		return entity.NewAdviceEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.AdviceSlipApi2SDK, entopts map[string]any) core.AdviceSlipApi2Entity {
		return entity.NewSearchEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewAdviceSlipApi2SDK = core.NewAdviceSlipApi2SDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewAdviceSlipApi2SDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *AdviceSlipApi2SDK  { return NewAdviceSlipApi2SDK(nil) }
func Test() *AdviceSlipApi2SDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
