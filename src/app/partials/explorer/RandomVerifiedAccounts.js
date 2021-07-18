import React, { Fragment } from "react";
import { TranslatedMessage } from "lib/TranslatedMessage";
import sampleSize from "lodash/sampleSize";

import AccountLink from "../AccountLink";

export default class RandomVerifiedAccounts extends React.Component {
  state = { accounts: [] };

  async componentDidMount() {
    /*const data = await fetch("https://mynano.ninja/api/accounts/verified", {
      mode: "cors"
    });
    const accounts = await data.json();*/
	const accounts = [{"votingweight":4.051734392056789e+34,"delegators":0,"uptime":94.82161673942497,"score":80,"account":"troll_3xcea84wfyyxxzf7tuy3d394eajjk7qkbwg4r51psttujp69hw3tx9ize78t","alias":"Genesis"}];

    this.setState({ accounts: sampleSize(accounts, this.props.count) });
  }

  render() {
    return (
      <Fragment>
        <h3 className="mb-0">
          <TranslatedMessage id="ninja.verified_accounts" />
        </h3>
        <p className="text-muted">
          <TranslatedMessage
            id="ninja.verified_accounts.desc"
            values={{
              link: (
                <a
                  href="https://mynano.ninja"
                  target="_blank"
                  className="text-muted"
                >
                  My Nano Ninja
                </a>
              )
            }}
          />
        </p>

        <hr />

        {this.state.accounts.map(account => (
          <VerifiedAccount key={account.account} account={account} />
        ))}
      </Fragment>
    );
  }
}

const VerifiedAccount = ({ account }) => {
  return (
    <div className="row">
      <div className="col">
        <h5 className="mb-0">
          <AccountLink
            account={account.account}
            name={account.alias}
            className="text-dark break-word"
          />
        </h5>
        <p>
          <AccountLink
            account={account.account}
            className="text-muted break-word"
          />
        </p>
      </div>
    </div>
  );
};
