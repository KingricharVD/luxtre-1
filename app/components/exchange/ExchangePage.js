import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ExchangeSettingPage from "./ExchangeSettingPage";
import styles from "./ExchangePage.scss";
import { CoinInfo } from '../../domain/CoinInfo';

type Props = {
    coinPrice: number,
    coinInfoList: Array<CoinInfo>,
    openDialogAction: Function,
    isDialogOpen: Function,
    onChangeCoin: Function,
    onSwapCoin: Function
  };

@observer
export default class ExchangePage extends Component<Props> {

    render() {
        const {
            coinPrice,
            coinInfoList,
            openDialogAction, 
            isDialogOpen,
            onChangeCoin,
            onSwapCoin
          } = this.props;

        return (
            <div className={styles.component}>
                <ExchangeSettingPage
                    coinPrice={coinPrice}
                    coinInfoList={coinInfoList}
                    openDialogAction={openDialogAction}  
                    isDialogOpen={isDialogOpen}
                    onChangeCoin={onChangeCoin}
                    onSwapCoin={onSwapCoin}
                />
            </div>   
        );
    }
}

