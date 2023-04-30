import AmountInput from 'components/AmountInput'
import Fieldset from 'components/__styled__/Fieldset'
import FormGroup from 'components/__styled__/FormGroup'
import Legend from 'components/__styled__/Legend'
import type { Component } from 'solid-js'

const App: Component = () => {
  return (
    <>
      <h1>BTS Scoring App</h1>
      <form>
        <Fieldset>
          <Legend>Technologies</Legend>
          <AmountInput id="amountStage1Tech" label="Amount of Stage 1 Technologies" max={4} />
          <AmountInput id="amountStage2Tech" label="Amount of Stage 2 Technologies" max={6} />
          <AmountInput id="amountStage3Tech" label="Amount of Stage 3 Technologies" max={6} />
          <AmountInput id="amountStage4Tech" label="Victory Points from Stage 4 Technologies" />
        </Fieldset>
        <Fieldset>
          <Legend>Private Technologies</Legend>
          <AmountInput id="amountPrivateStage2Tech" label="Amount of private Stage 2 Technologies" />
          <AmountInput id="amountPrivateStage3Tech" label="Amount of private Stage 3 Technologies" />
        </Fieldset>
        <Fieldset>
          <Legend>Most power in</Legend>
          <Fieldset>
            <Legend>Sol</Legend>
            <FormGroup>
              <label>
                <input id="mostPowerInSolNo" type="radio" name="mostPowerInSol" value="no" /> No
              </label>
              <label>
                <input id="mostPowerInSolYes" type="radio" name="mostPowerInSol" value="yes" /> Yes
              </label>
              <label>
                <input id="mostPowerInSolTie" type="radio" name="mostPowerInSol" value="tie" /> Tie
              </label>
            </FormGroup>
          </Fieldset>
          <Fieldset>
            <Legend>Deep Space</Legend>
            <FormGroup>
              <label>
                <input id="mostPowerInDeepSpaceNo" type="radio" name="mostPowerInSol" value="no" /> No
              </label>
              <label>
                <input id="mostPowerInDeepSpaceYes" type="radio" name="mostPowerInSol" value="yes" /> Yes
              </label>
              <label>
                <input id="mostPowerInDeepSpaceTie" type="radio" name="mostPowerInSol" value="tie" /> Tie
              </label>
            </FormGroup>
          </Fieldset>
        </Fieldset>
        <Fieldset>
          <Legend>Others</Legend>
          <AmountInput id="colonizedSystems" label="Victory Points from colonized Systems" />
          <AmountInput id="amountControlledLocations" label="Amount of controlled locations (Outpost discs)" />
          <AmountInput id="automationTrack" label="Victory Points from Automation track" />
          <AmountInput
            id="eventCards"
            label="Victory Points from Event cards (in front of you / attached to cards / near Achievements)"
          />
          <AmountInput id="achievements" label="Victory Points from Achievements" />
        </Fieldset>
      </form>
      <h2>Scoring</h2>
      <p>0</p>
    </>
  )
}

export default App
