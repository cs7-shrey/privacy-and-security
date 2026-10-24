**1. K-anonymity: removing names doesn’t make data anonymous**

Suppose a hospital removes patient names but keeps **ZIP code, birth date, and gender**. A public voter list contains those same fields **plus names**. Joining the datasets can reveal whose diagnosis is whose.

Those fields are **quasi-identifiers**: individually ordinary, collectively identifying.

**K-anonymity requires each combination of quasi-identifiers to appear in at least k records.** With k = 5, a record blends into a group of at least five people. Achieve this through:

- **Generalization:** exact age → age range; full ZIP → partial ZIP.
- **Suppression:** hide some values.

The tradeoff: stronger anonymization usually reduces detail and analytical usefulness. Also, k-anonymity doesn’t prevent every disclosure: if everyone in your group has the same disease, the disease is still revealed.

**3. Slicing and finding positions**

For January–December data:

```python
expenses[:3]                         # Jan–Mar: endpoint excluded
expenses[6:]                         # Jul–Dec: July has index 6
np.where(expenses > 1600)[0]          # Matching zero-based indices
np.where(expenses > 1600)[0] + 1      # Matching month numbers
```

Remember: `np.where(condition)` returns a **tuple of index arrays**, one per dimension. For a one-dimensional array, `[0]` extracts the single index array.

**4. Pandas: grouping produces one summary per category**

```python
time = np.linspace(0, 2*np.pi, 1000)
wave = amplitude * np.sin(frequency * time)
plt.plot(time, wave)
```

Read it as: **split rows by category → calculate each group’s sum and mean → produce a summary table**.

`reset_index()` turns the category labels from the index into a regular column. Applying two aggregations initially creates hierarchical column labels; assigning `result.columns` replaces them with simple names.

For your dataset: **Clothing = 105, 35; Electronics = 2130, 532.5; Home = 270, 90** — sum, then mean.
