import { iconsImgs } from "../../utils/images"

const Financial = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c8">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Financial Advice</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c8-content">
            <p className="text text-silver-v1">Taking the time to learn a few basic financial rules can help you build a healthy financial future.
            Start an emergency fund and pay yourself every month.
            Saving for retirement is an integral part of any financial plan, and your nest egg can grow with the power of compound interest.</p>
        </div>
    </div>
  )
}

export default Financial
