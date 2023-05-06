import AmountInput from 'components/AmountInput'
import MostPowerRadioGroup from 'components/MostPowerRadioGroup'
import Fieldset from 'components/__styled__/Fieldset'
import FormGroup from 'components/__styled__/FormGroup'
import Legend from 'components/__styled__/Legend'
import Score from 'components/__styled__/Score'
import Submit from 'components/__styled__/Submit'
import type { Component } from 'solid-js'
import { createStore } from 'solid-js/store'

type State = {
  amountStage1Tech: number
  amountStage2Tech: number
  amountStage3Tech: number
  amountStage4Tech: number
  amountPrivateStage2Tech: number
  amountPrivateStage3Tech: number
  mostPowerInSol: 'no' | 'yes' | 'tie'
  mostPowerInDeepSpace: 'no' | 'yes' | 'tie'
  colonizedSystems: number
  amountControlledLocations: number
  automationTrack: number
  eventCards: number
  achievements: number
  leaders: number
  score: number
}

const App: Component = () => {
  const [state, setState] = createStore<State>({
    amountStage1Tech: 0,
    amountStage2Tech: 0,
    amountStage3Tech: 0,
    amountStage4Tech: 0,
    amountPrivateStage2Tech: 0,
    amountPrivateStage3Tech: 0,
    mostPowerInSol: 'no',
    mostPowerInDeepSpace: 'no',
    colonizedSystems: 0,
    amountControlledLocations: 0,
    automationTrack: 0,
    eventCards: 0,
    achievements: 0,
    leaders: 0,
    score: 0,
  })

  const calculateScoring = (state: State) => {
    const amountStage1Tech = state.amountStage1Tech
    const amountStage2Tech = state.amountStage2Tech * 2
    const amountStage3Tech = state.amountStage3Tech * 3
    const amountStage4Tech = state.amountStage4Tech
    const amountPrivateStage2Tech = state.amountPrivateStage2Tech * 2
    const amountPrivateStage3Tech = state.amountPrivateStage3Tech * 3
    const mostPowerInSol = state.mostPowerInSol === 'yes' || state.mostPowerInSol === 'tie' ? 1 : 0
    const mostPowerInSDeepSpace = state.mostPowerInDeepSpace === 'yes' || state.mostPowerInDeepSpace === 'tie' ? 1 : 0
    const colonizedSystems = state.colonizedSystems
    const amountControlledLocations = state.amountControlledLocations
    const automationTrack = state.automationTrack
    const eventCards = state.eventCards
    const achievements = state.achievements
    const leaders = state.leaders

    const score =
      amountStage1Tech +
      amountStage2Tech +
      amountStage3Tech +
      amountStage4Tech +
      amountPrivateStage2Tech +
      amountPrivateStage3Tech +
      mostPowerInSol +
      mostPowerInSDeepSpace +
      colonizedSystems +
      amountControlledLocations +
      automationTrack +
      eventCards +
      achievements +
      leaders

    setState('score', score)
  }

  const handleAmountStage1TechChange = (event: any) => {
    setState('amountStage1Tech', parseInt(event.target.value))
  }

  const handleAmountStage2TechChange = (event: any) => {
    setState('amountStage2Tech', parseInt(event.target.value))
  }

  const handleAmountStage3TechChange = (event: any) => {
    setState('amountStage3Tech', parseInt(event.target.value))
  }

  const handleAmountStage4TechChange = (event: any) => {
    setState('amountStage4Tech', parseInt(event.target.value))
  }

  const handleAmountPrivateStage2TechChange = (event: any) => {
    setState('amountPrivateStage2Tech', parseInt(event.target.value))
  }

  const handleAmountPrivateStage3TechChange = (event: any) => {
    setState('amountPrivateStage3Tech', parseInt(event.target.value))
  }

  const handleMostPowerInSolChange = (event: any) => {
    setState('mostPowerInSol', event.target.value)
  }

  const handleMostPowerInDeepSpaceChange = (event: any) => {
    setState('mostPowerInDeepSpace', event.target.value)
  }

  const handleColonizedSystemsChange = (event: any) => {
    setState('colonizedSystems', parseInt(event.target.value))
  }

  const handleAmountControlledLocationsChange = (event: any) => {
    setState('amountControlledLocations', parseInt(event.target.value))
  }

  const handleAutomationTrackChange = (event: any) => {
    setState('automationTrack', parseInt(event.target.value))
  }

  const handleEventCardsChange = (event: any) => {
    setState('eventCards', parseInt(event.target.value))
  }

  const handleAchievementsChange = (event: any) => {
    setState('achievements', parseInt(event.target.value))
  }

  const handleLeadersChange = (event: any) => {
    setState('leaders', parseInt(event.target.value))
  }

  return (
    <>
      <h1>BTS Scoring App</h1>
      <form>
        <Fieldset>
          <Legend>Technologies</Legend>
          <AmountInput
            id="amountStage1Tech"
            label="Amount of Stage 1 Technologies"
            max={4}
            onChange={handleAmountStage1TechChange}
          />
          <AmountInput
            id="amountStage2Tech"
            label="Amount of Stage 2 Technologies"
            max={6}
            onChange={handleAmountStage2TechChange}
          />
          <AmountInput
            id="amountStage3Tech"
            label="Amount of Stage 3 Technologies"
            max={6}
            onChange={handleAmountStage3TechChange}
          />
          <AmountInput
            id="amountStage4Tech"
            label="Victory Points from Stage 4 Technologies"
            onChange={handleAmountStage4TechChange}
          />
        </Fieldset>
        <Fieldset>
          <Legend>Private Technologies</Legend>
          <AmountInput
            id="amountPrivateStage2Tech"
            label="Amount of private Stage 2 Technologies"
            onChange={handleAmountPrivateStage2TechChange}
          />
          <AmountInput
            id="amountPrivateStage3Tech"
            label="Amount of private Stage 3 Technologies"
            onChange={handleAmountPrivateStage3TechChange}
          />
        </Fieldset>
        <Fieldset>
          <Legend>Most power in</Legend>
          <Fieldset>
            <Legend>Sol</Legend>
            <MostPowerRadioGroup
              name="mostPowerInSol"
              onChange={handleMostPowerInSolChange}
              checkedValue={state.mostPowerInSol}
            />
          </Fieldset>
          <Fieldset>
            <Legend>Deep Space</Legend>
            <MostPowerRadioGroup
              name="mostPowerInDeepSpace"
              onChange={handleMostPowerInDeepSpaceChange}
              checkedValue={state.mostPowerInDeepSpace}
            />
          </Fieldset>
        </Fieldset>
        <Fieldset>
          <Legend>Others</Legend>
          <AmountInput
            id="colonizedSystems"
            label="Victory Points from colonized Systems"
            onChange={handleColonizedSystemsChange}
          />
          <AmountInput
            id="amountControlledLocations"
            label="Amount of controlled locations (Outpost discs)"
            onChange={handleAmountControlledLocationsChange}
          />
          <AmountInput
            id="automationTrack"
            label="Victory Points from Automation track"
            onChange={handleAutomationTrackChange}
          />
          <AmountInput
            id="eventCards"
            label="Victory Points from Event cards (in front of you / attached to cards / near Achievements)"
            onChange={handleEventCardsChange}
          />
          <AmountInput id="achievements" label="Victory Points from Achievements" onChange={handleAchievementsChange} />
        </Fieldset>

        <Fieldset>
          <Legend>Expansion</Legend>
          <AmountInput id="leaders" label="Victory Points from Leaders" onChange={handleLeadersChange} />
        </Fieldset>
      </form>
      <Submit onClick={() => calculateScoring(state)}>Calculate Score</Submit>
      <h2>Current Score</h2>
      <Score>{state.score}</Score>
    </>
  )
}

export default App
