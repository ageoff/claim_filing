import { createSelector } from 'reselect'

export const getAvailableWeeks = (state) => state.claim.availableWeeks
export const getSelectedWeekId = (state) => state.claim.selectedWeekId
export const getSelectedWeekText = createSelector(
  [getAvailableWeeks, getSelectedWeekId],
  (weeks, id) => {
    if (weeks === [] || weeks == null || id == null || id === 0) return 'No Week Selected'
    let result = ''
    weeks.every((w) => {
      if (w.id === id) result = w.text
      return result === ''
    })
    return result
  },
)
