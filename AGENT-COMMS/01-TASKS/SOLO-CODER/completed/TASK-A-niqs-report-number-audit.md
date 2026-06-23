# TASK-A: NIQS Report Number Audit — Add (2022)WT-HW-00529 到所有数据引用位置

## 优先级: P0
## 说明: 所有引用 NIQS-tested 或 NIQS-certified 数据的地方，必须附带报告编号。

## 规则

对于每个文件中出现 "NIQS-tested" 或 "NIQS-certified" 的位置，如果是引用具体数据（0.88发射率、68%辐射效率），则在首次出现处补上报告编号。

**添加格式：**
```
NIQS report (2022)WT-HW-00529
```

**不要添加的位置（保持原样）：**
- 纯机构介绍（"NIQS is the National Inspection and Quarantine Service..."）
- 装饰性标识（<span>NIQS</span> 等UI元素）
- FAQ中解释NIQS机构的问题/答案
- meta keywords

## 需要修改的文件

### 文件1: pages/ABOUT/AboutMission.html
- L47 Schema text: `NIQS-certified at 0.88 normal total emissivity` → `NIQS-certified at 0.88 normal total emissivity (NIQS report 2022WT-HW-00529)`

### 文件2: pages/ABOUT/AboutOrigin.html
- L27 meta description: `NIQS-tested normal total emissivity 0.88 and NIQS-tested electro-thermal radiation conversion efficiency: 68%` → 在后面补该号码

### 文件3: pages/graphene-fir/what-is-emissivity.html
- L64: `0.88 NIQS-tested` → 补报告编号
- L70: `0.88 NIQS-tested` → 补报告编号

### 文件4: pages/applications.html
- L52 Schema text: `NIQS-tested electro-thermal radiation conversion efficiency (68%)` → 首次引用位置补报告编号

### 文件5: pages/partnership.html
- L44 Schema text: 多处NIQS数据引用
- L84: `NIQS spectral test reports`

### 文件6: pages/PRODUCTS/CABIN/cabin.html
- L43 FAQ text: `NIQS-tested`

### 文件7: pages/PRODUCTS/CAPSULE/capsule-b2b.html
- L88 FAQ text: `certified by the National Infrared Center (NIQS) at 0.88`

### 文件8: pages/PRODUCTS/FILM/GrapheneFilm.html
- L49 Schema: `NIQS-tested 0.88`

### 文件9: pages/PRODUCTS/PORTABLES/DeepRecovery.html
- L85 FAQ text: `0.88 normal total emissivity (NIQS-certified)`

### 文件10: pages/PRODUCTS/ProductPage.html
- L63 Schema text: `NIQS-certified 0.88`

### 文件11: pages/SCIENCE/KNOWLEDGE/graphene-fir/comparison.html
- L219: `All data based on NIQS-certified measurements`

### 文件12: pages/SCIENCE/KNOWLEDGE/graphene-fir/what-is-far-infrared-radiant-efficiency.html
- 多处 NIQS-tested 68% 数据引用

## 验证
- [ ] grep -r "NIQS-tested" | grep -v "2022)WT" → 剩余均应属于机构介绍或装饰元素
- [ ] grep -r "NIQS-certified" | grep -v "2022)WT" → 同上
- [ ] 不要部署
