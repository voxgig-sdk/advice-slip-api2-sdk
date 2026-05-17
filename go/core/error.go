package core

type AdviceSlipApi2Error struct {
	IsAdviceSlipApi2Error bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewAdviceSlipApi2Error(code string, msg string, ctx *Context) *AdviceSlipApi2Error {
	return &AdviceSlipApi2Error{
		IsAdviceSlipApi2Error: true,
		Sdk:              "AdviceSlipApi2",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *AdviceSlipApi2Error) Error() string {
	return e.Msg
}
